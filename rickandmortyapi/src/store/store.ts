// store.ts
import { createPinia } from 'pinia'

export const pinia = createPinia()

// export const useMyStore = pinia.defineStore('myStore', {
//   state: () => ({
//     // Your store state goes here
//   }),
//   getters: {
//     // Your getters go here
//   },
//   actions: {
//     // Your actions go here
//   },
// })

// // Provide typings for the store
// export type MyStore = ReturnType<typeof useMyStore>
