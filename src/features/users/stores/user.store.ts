import {defineStore} from 'pinia'
import {computed, ref} from 'vue'
import type {User} from '../user'

export const useUsersStore = defineStore('users', () => {
  const user = ref<User>()

  const isLoggedIn = () => {
    return !!user?.value?.token
  }

  return {
    user,
    isLoggedIn,
  }
})
