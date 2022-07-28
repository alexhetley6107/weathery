import { AppDispatch, RootState } from './../store/store';
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';

export const useCustomDispatch = () => useDispatch<AppDispatch>();
export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector;
