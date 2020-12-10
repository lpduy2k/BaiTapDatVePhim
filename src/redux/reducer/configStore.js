import {combineReducers,createStore} from 'redux';
import {BaiTapDatVePhimReducer} from './BaiTapDatVePhimReducer';

const rootReducer = combineReducers({
    stateBaiTapDatVePhimReducer: BaiTapDatVePhimReducer
})

export const store = createStore(rootReducer);