import { OpenAPIHono } from '@hono/zod-openapi'
import { getVersionWABAIDSchedulesRoute, postVersionWABAIDSchedulesRoute } from '../routes'

const app = new OpenAPIHono()

export const scheduleManagementHandler = app
  .openapi(getVersionWABAIDSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionWABAIDSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
