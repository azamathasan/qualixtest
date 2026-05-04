import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Request } from './types'

export const useRequestStore = defineStore('request', () => {
  const requests = ref<Request[]>([
    {
      id: 1,
      title: 'Заявка 1',
      description: 'Описание заявки 1',
      createdAt: '01.01.2026'
    },
    {
      id: 2,
      title: 'Заявка 2',
      description: 'Описание заявки 2',
      createdAt: '02.01.2026'
    },
    {
      id: 3,
      title: 'Заявка 3',
      description: 'Описание заявки 3',
      createdAt: '03.01.2026'
    }
  ])

  const generateNextId = (): number => {
    if (requests.value.length === 0) return 1

    const count = requests.value.length

    const lastId = requests.value[requests.value.length - 1]?.id || 0

    return Math.max(count, lastId) + 1
  }

  const addRequest = (newRequest: Request) => {
    const requestWithId = { 
        ...newRequest,
        id: generateNextId(),
        createdAt: new Date().toLocaleDateString()
    }
    requests.value.push(requestWithId)
    return requestWithId.id
  }

  const deleteRequest = (id: number) => {
    requests.value = requests.value.filter((req) => req.id !== id)
  }

  const updateRequest = (updatedRequest: Request) => {
    const index = requests.value.findIndex((req) => req.id === updatedRequest.id)
    if (index !== -1) {
      requests.value[index] = { ...updatedRequest }
    }
  }

  const getRequestById = (id: number) => {
    return requests.value.find((req) => req.id === id)
  }

  return {
    requests,
    addRequest,
    deleteRequest,
    updateRequest,
    getRequestById
  }
})