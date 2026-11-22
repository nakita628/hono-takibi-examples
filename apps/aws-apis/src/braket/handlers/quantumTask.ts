import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getQuantumTaskQuantumTaskArnRoute,
  postQuantumTaskRoute,
  putQuantumTaskQuantumTaskArnCancelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const quantumTaskHandler = app
  .openapi(putQuantumTaskQuantumTaskArnCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuantumTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuantumTaskQuantumTaskArnRoute, (c) => {
    throw new Error('Not implemented')
  })
