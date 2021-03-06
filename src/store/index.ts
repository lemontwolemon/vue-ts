import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { IRootState, IStoreType } from '@/store/types'
import login from './login/login'
const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'qjg',
      age: 18
    }
  },
  modules: {
    login
  }
})

export function setupStore() {
  store.dispatch('login/loadLocal')
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
