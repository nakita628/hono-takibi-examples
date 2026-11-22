import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiTasksRoute, getApiTasksTaskIdRoute } from '../routes'

const app = new OpenAPIHono()

export const taskHandler = app
  .openapi(getApiTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTasksTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
