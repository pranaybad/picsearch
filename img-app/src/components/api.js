import { useState, useEffect } from 'react'
import axios from "axios";
const count = 1;

function LoadImages() {
    const [state, setState] = useState([])
    useEffect(() => {
        axios
            .get("https://api.unsplash.com/photos?client_id=yAjPRLciMKWGxO4pcz5fvCJmfzQw_oUtwbo77ZE1Wyo")
            .then((data) => {
                setState(data.data);
            })
    }, [count])
    return state;
}


function SearchImages(query) {
    const [state, setState] = useState([])
    useEffect(() => {
        axios
            .get("https://api.unsplash.com/search/photos?query=" + query + "&client_id=yAjPRLciMKWGxO4pcz5fvCJmfzQw_oUtwbo77ZE1Wyo")
            .then((data) => {
                setState(data.data.results);
            })
    }, [query])
    return state;
}


export { LoadImages, SearchImages }