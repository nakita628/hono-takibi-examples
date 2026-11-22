import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1BackgroundTaskIndexRoute, getApiV1BackgroundTaskTaskIdIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const backgroundTasksHandler = app
  .openapi(getApiV1BackgroundTaskIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BackgroundTaskTaskIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
