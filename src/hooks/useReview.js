import { useState } from "react";
import { reviewsArray } from "../data/review";

export const useReview = () => {
    const [reviewsState] = useState(reviewsArray);

    return {
        reviewsState
    }
}