// import React, { useState } from 'react';
// import Autosuggest, { ChangeEvent } from 'react-autosuggest';

// const suggestions: string[] = [
//     'apple', 'banana', 'orange', 'grape', 'watermelon',
//     'strawberry', 'blueberry', 'kiwi', 'pineapple', 'mango'
// ];

// const SearchBar: React.FC = () => {
//     const [value, setValue] = useState<string>('');
//     const [suggestionsList, setSuggestionsList] = useState<string[]>([]);

//     const getSuggestions = (inputValue: string): string[] => {
//         const inputValueLowerCase = inputValue.trim().toLowerCase();
//         const inputLength = inputValueLowerCase.length;
//         return inputLength === 0 ? [] : suggestions.filter(
//             (suggestion) => suggestion.toLowerCase().slice(0, inputLength) === inputValueLowerCase
//         );
//     };

//     const onChange = (event: React.FormEvent<HTMLElement>, { newValue }: ChangeEvent): void => {
//         setValue(newValue);
//     };


//     const onSuggestionsFetchRequested = ({ value }: Autosuggest.SuggestionsFetchRequestedParams): void => {
//         setSuggestionsList(getSuggestions(value));
//     };

//     const onSuggestionsClearRequested = (): void => {
//         setSuggestionsList([]);
//     };

//     const getSuggestionValue = (suggestion: string): string => suggestion;

//     const renderSuggestion = (suggestion: string): JSX.Element => (
//         <div>
//             {suggestion}
//         </div>
//     );

//     const inputProps: Autosuggest.InputProps<string> = {
//         placeholder: 'Type a fruit',
//         value,
//         onChange
//     };

//     return (
//         <div className="flex flex-col items-center justify-center my-12">
//             <h1 className="text-3xl mb-4">Fruit Search</h1>
//             <div className="w-64"> {/* Adjust width as needed */}
//                 <Autosuggest
//                     suggestions={suggestionsList}
//                     onSuggestionsFetchRequested={onSuggestionsFetchRequested}
//                     onSuggestionsClearRequested={onSuggestionsClearRequested}
//                     getSuggestionValue={getSuggestionValue}
//                     renderSuggestion={renderSuggestion}
//                     inputProps={inputProps}
//                 />
//             </div>
//         </div>
//     );
// };

// export default SearchBar;
