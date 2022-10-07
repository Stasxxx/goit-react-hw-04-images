import { SearchbarHeader,SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from "./Searchbar.styled";

export const Searchbar = () => {
    return (
        <SearchbarHeader className="searchbar">
            <SearchForm className="form">
                <SearchFormButton type="submit" className="button">
                <SearchFormButtonLabel className="button-label">Search</SearchFormButtonLabel>
                </SearchFormButton>

                <SearchFormInput
                className="input"
                type="text"
                autocomplete="off"
                autoFocus
                placeholder="Search images and photos"
                />
            </SearchForm>
        </SearchbarHeader>
    )
}
