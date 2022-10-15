import { useState } from "react";
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { FcSearch } from "react-icons/fc";
import { SearchbarHeader, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from "./Searchbar.styled";

export const Searchbar = ({onSubmit}) => {
    const [imageName, setImageName] = useState('');

    const handleNameChange= e => {
        setImageName(e.currentTarget.value.toLowerCase());
    }

   
    const handleSubmit = e => {
        e.preventDefault();

        if (imageName.trim() === '') {
            toast.error('Введіть найменування картинки');
        return
        }
        onSubmit(imageName);
        setImageName('');
    }
    
    return (
            
            
        <SearchbarHeader>
            <SearchForm onSubmit={handleSubmit}>
                <SearchFormButton type="submit">
                    <FcSearch />
                    <SearchFormButtonLabel>Search</SearchFormButtonLabel>
                </SearchFormButton>

                <SearchFormInput
                    className="input"
                    type="text"
                    value={imageName}
                    autocomplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    onChange={handleNameChange}
                />
            </SearchForm>
        </SearchbarHeader>
            
    );
}


Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}