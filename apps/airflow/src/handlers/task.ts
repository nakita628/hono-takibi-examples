import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2DagsDagIdTasksRoute, getApiV2DagsDagIdTasksTaskIdRoute } from '../routes'

const app = new OpenAPIHono()

export const taskHandler = app
  .openapi(getApiV2DagsDagIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdTasksTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
