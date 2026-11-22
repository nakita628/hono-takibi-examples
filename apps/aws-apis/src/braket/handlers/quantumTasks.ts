import { OpenAPIHono } from '@hono/zod-openapi'
import { postQuantumTasksRoute } from '../routes'

const app = new OpenAPIHono()

export const quantumTasksHandler = app.openapi(postQuantumTasksRoute, (c) => {
  throw new Error('Not implemented')
})
