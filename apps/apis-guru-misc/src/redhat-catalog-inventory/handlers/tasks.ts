import { OpenAPIHono } from '@hono/zod-openapi'
import { getTasksIdRoute, getTasksRoute, patchTasksIdRoute } from '../routes'

const app = new OpenAPIHono()

export const tasksHandler = app
  .openapi(getTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTasksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTasksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
