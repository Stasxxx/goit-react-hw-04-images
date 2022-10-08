import { Btn } from 'components/LoadMore/LoadMore.styled';
import { Component } from 'react';

export class LoadMore extends Component{
    state = {
        page: 1,
    }

    handleAddImage = (e) => {
        if (e.currentTarget) {
            this.setState(prevState => {
            console.log(prevState.page + 1)
                return { page: prevState.page + 1 }
        });
        }
        
    }

    render() {
        return (
        <Btn type="button" onClick={this.handleAddImage}>Load More</Btn>
    )
    }
    
}