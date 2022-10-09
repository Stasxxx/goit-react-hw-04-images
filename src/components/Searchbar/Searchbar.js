import { Component } from "react";
import { toast } from 'react-toastify';
import { FcSearch } from "react-icons/fc";
import { SearchbarHeader, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from "./Searchbar.styled";

export class Searchbar extends Component{
    state = {
        imageName: '',
    }

    handleNameChange= e => {
        this.setState({imageName: e.currentTarget.value.toLowerCase()})
    }

   
    handleSubmit = e => {
        e.preventDefault();

        if (this.state.imageName.trim() === '') {
        toast.error('Введіть найменування картинки')
        return
        }
        this.props.onSubmit(this.state.imageName)
        this.setState({imageName: ''})
    }
    

    render() {
        return (
            
            
        <SearchbarHeader>
            <SearchForm onSubmit={this.handleSubmit}>
                <SearchFormButton type="submit">
                    <FcSearch/>
                <SearchFormButtonLabel>Search</SearchFormButtonLabel>
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
            
    )}
    
}
