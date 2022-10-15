import PropTypes from 'prop-types';
import { Btn } from 'components/LoadMore/LoadMore.styled';
import { useState } from 'react';

export const LoadMore = ({onClick}) => {
    const [ page, setPage ] = useState(1);

   const handleAddPage = (e) => {
        if (e.currentTarget) {
            setPage(state =>  state + 1 );
       }
        onClick(page)
    }

    
        return (
        <Btn type="button" onClick={handleAddPage}>Load More</Btn>
    )
}

LoadMore.propTypes = {
        onClick: PropTypes.func.isRequired,
    }