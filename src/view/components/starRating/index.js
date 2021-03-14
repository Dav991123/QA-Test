import React from 'react';
import BeautyStars from 'beauty-stars';

const StarRating = ({starRating, onSetStarRating}) => {
    return (
        <div>
            <BeautyStars
                value={starRating}
                onChange={value => onSetStarRating(value)}
            />
        </div>
    )
};
export default StarRating;