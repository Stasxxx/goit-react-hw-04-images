import { Component } from "react";
import { FcSearch } from "react-icons/fc";
import { SearchbarHeader, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from "./Searchbar.styled";

export class Searchbar extends Component{
    state = {
        imageName: '',
    }

    handleNameChange = e => {
        // console.log(e.currentTarget.value)
        this.setState({imageName: e.currentTarget.value.toLowerCase()})
    }

    handleSubmit = e => {
        e.preventDefault();

        this.props.onSubmit(this.state.imageName)
        this.setState({imageName: ''})
    }

    render() {
        return (
        <SearchbarHeader>
            <SearchForm onSubmit={this.handleSubmit}>
                <SearchFormButton type="submit" className="button">
                    <FcSearch/>
                <SearchFormButtonLabel className="button-label">Search</SearchFormButtonLabel>
                </SearchFormButton>

                <SearchFormInput
                className="input"
                type="text"
                value={this.state.imageName}
                autocomplete="off"
                autoFocus
                placeholder="Search images and photos"
                onChange={this.handleNameChange}    
                />
            </SearchForm>
        </SearchbarHeader>
    )
    }
    
}
