import React, { useState } from 'react';

const suggestions: string[] = [
    'apple', 'banana', 'orange', 'grape', 'watermelon',
    'strawberry', 'blueberry', 'kiwi', 'pineapple', 'mango'
];

const SearchBar: React.FC = () => {
    const [value, setValue] = useState<string>('');
    const [suggestionsList, setSuggestionsList] = useState<string[]>([]);
    const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

    const getSuggestions = (inputValue: string): string[] => {
        const inputValueLowerCase = inputValue.trim().toLowerCase();
        const inputLength = inputValueLowerCase.length;
        return inputLength === 0 ? [] : suggestions.filter(
            suggestion => suggestion.toLowerCase().includes(inputValueLowerCase)
        );
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const inputValue = event.target.value;
        setValue(inputValue);
        setSuggestionsList(getSuggestions(inputValue));
        setShowSuggestions(true);
    };

    const onSuggestionClick = (suggestion: string): void => {
        setValue(suggestion);
        setShowSuggestions(false);
    };

    return (
        <div className="flex flex-col items-center justify-center my-12">
            <h1 className="text-3xl mb-4">Fruit Search</h1>
            <div className="w-64 relative"> {/* Adjust width as needed */}
                <input
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    type="text"
                    placeholder="Type a fruit"
                    value={value}
                    onChange={onChange}
                />
                {showSuggestions && suggestionsList.length > 0 && (
                    <ul className="absolute z-10 bg-white border border-gray-300 rounded mt-1 w-full">
                        {suggestionsList.map(suggestion => (
                            <li
                                key={suggestion}
                                className="px-3 py-2 cursor-pointer hover:bg-gray-100"
                                onClick={() => onSuggestionClick(suggestion)}
                            >
                                {suggestion}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default SearchBar;
