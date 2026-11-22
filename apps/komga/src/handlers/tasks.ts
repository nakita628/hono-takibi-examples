import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteApiV1TasksRoute } from '../routes'

const app = new OpenAPIHono()

export const tasksHandler = app.openapi(deleteApiV1TasksRoute, (c) => {
  throw new Error('Not implemented')
})
