import { useState } from "react";

const SearchForm = ({ onSubmit }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = event => {
        setQuery(event.target.value.toLowerCase());
    }

    const handleFormSubmit = event => {
        event.preventDefault();

        if (query.trim() === '') {
            alert('React-toastify')
            return;
        }

        onSubmit(query);
        setQuery('');
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input
                type="text"
                autoComplete="off"
                value={query}
                placeholder="Search"
                onChange={handleInputChange}
            />
            <button type="submit">
                Search
            </button>
        </form>
    )
}

export default SearchForm;