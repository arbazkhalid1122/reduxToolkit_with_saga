import { all, put, takeEvery } from 'redux-saga/effects';
import { decrement, increment } from './counterSlice';


function* incrementAsync(){
 yield put(increment());
}

function* decrementAsync(){
    yield put(decrement());
   }

   export function* watchInc(){
    yield takeEvery('increment',incrementAsync)
   }

   export function* watchDec(){
    yield takeEvery('decrement',decrementAsync)
   }

   export default function* rootSaga(){
    yield all([watchInc(),watchDec()])
   }