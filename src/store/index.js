import { createStore } from 'vuex'
import authModule from '../modules/auth/store'
import uiModule from '../modules/ui/store'

export default createStore({
  modules: {
    auth: authModule,
    ui: uiModule
  }
})
