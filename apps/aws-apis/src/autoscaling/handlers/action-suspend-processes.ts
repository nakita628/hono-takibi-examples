import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionSuspendProcessesRoute, postActionSuspendProcessesRoute } from '../routes'

const app = new OpenAPIHono()

export const actionSuspendProcessesHandler = app
  .openapi(getActionSuspendProcessesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionSuspendProcessesRoute, (c) => {
    throw new Error('Not implemented')
  })
