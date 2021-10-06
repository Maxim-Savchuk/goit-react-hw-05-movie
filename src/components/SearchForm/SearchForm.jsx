import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { toast } from 'react-toastify';

import { Form, Input, Button } from "./SearchForm.styled";

const SearchForm = () => {
    const [query, setQuery] = useState('');
    const history = useHistory();
    const location = useLocation();

    const handleInputChange = event => {
        setQuery(event.target.value.toLowerCase());
    }

    const handleFormSubmit = event => {
        event.preventDefault();

        if (query.trim() === '') {
            toast.error('Please enter the movie name.');
            return;
        }

        history.push({
            search: `query=${query}`,
            state: { from: location },
        })
        setQuery('');
    }

    return (
        <Form onSubmit={handleFormSubmit}>
            <Input
                type="text"
                autoComplete="off"
                placeholder="Search..."
                value={query}
                onChange={handleInputChange}
            />
            <Button type="submit">
                Search
            </Button>
        </Form>
    )
}

export default SearchForm;