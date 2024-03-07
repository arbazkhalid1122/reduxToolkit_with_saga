import {configureStore} from '@reduxjs/toolkit'
import counterSlice from './counterSlice'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'

const sagaMIddle = createSagaMiddleware()


const store = configureStore({
    reducer:{
        counter: counterSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMIddle),
})
sagaMIddle.run(rootSaga)
export default store