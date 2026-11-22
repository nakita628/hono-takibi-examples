import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTodoRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTodoHandler = app.openapi(getRepositorySearchTypeTodoRoute, (c) => {
  throw new Error('Not implemented')
})
