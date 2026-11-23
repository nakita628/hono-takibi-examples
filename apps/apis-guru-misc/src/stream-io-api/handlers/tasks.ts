import { OpenAPIHono } from '@hono/zod-openapi'
import { getTasksIdRoute } from '../routes'

const app = new OpenAPIHono()

export const tasksHandler = app.openapi(getTasksIdRoute, (c) => {
  throw new Error('Not implemented')
})
