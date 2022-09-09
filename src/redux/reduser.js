import { combineReducers } from 'redux'
import {postReducer}from './post-reduser'

export const rootReducer=combineReducers({
    post:postReducer
})