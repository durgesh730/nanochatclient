import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { getServerData } from "../helper/helper";


import * as Action from "../redux/question_reducer"
import { serverhost } from "../host";

// fetch question hook to fetch  api data set value to store 
export const useFetchQuestion = () => {

    const dispatch = useDispatch();
    const [getData, setGetData] = useState({ isLoading: false, apiData: [], serverError: null })

    useEffect(() => {
        setGetData(prev => ({ ...prev, isLoading: true }));

        // async function fetch backend data
        (async () => {

            try {
                const [{questions, answers}] =  await getServerData( `${serverhost}/Bioquestions` , (data)=>data)

                if (questions.length > 0) {
                    setGetData(prev => ({ ...prev, isLoading: false }));
                    setGetData(prev => ({ ...prev, apiData: questions}));

                    // dispatch an action
                    dispatch(Action.startExamAction({question:questions, answers}))
                }else{
                    throw new Error(" no question available")
                }

            } catch (error) {
                setGetData(prev => ({ ...prev, isLoading: false }));
                setGetData(prev => ({ ...prev, serverError: error }));
            }
        })();
    }, [dispatch]);

    return [getData, setGetData]
}

/// move action dispatch function

export const moveNextQuestion = ()=> async(dispatch) =>{
    try {
        dispatch(Action.moveNextAction()) // increase trace value by 1
    } catch (error) {
        console.log(error)
    }
}

/// prev action dispatch function

export const movePrevQuestion = ()=> async(dispatch) =>{
    try {
        dispatch(Action.movePrevAction()) // decrease trace value by 1
    } catch (error) {
        console.log(error)
    }
}