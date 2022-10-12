import PropTypes from 'prop-types';
import { Btn } from 'components/LoadMore/LoadMore.styled';
import { Component } from 'react';

export class LoadMore extends Component{
    static propTypes = {
        onClick: PropTypes.func.isRequired,
    }

    state = {
        page: 1,
    }

    handleAddPage = (e) => {
        if (e.currentTarget) {
            this.setState(prevState => {
             return { page: prevState.page + 1 }
        });
        }
        this.props.onClick(this.state.page)
    }

    render() {
        return (
        <Btn type="button" onClick={this.handleAddPage}>Load More</Btn>
    )
    }
    
}