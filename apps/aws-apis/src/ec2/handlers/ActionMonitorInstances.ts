import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionMonitorInstancesRoute, postActionMonitorInstancesRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionMonitorInstancesHandler = app
  .openapi(getActionMonitorInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionMonitorInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
