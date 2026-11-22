import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionTerminateInstancesRoute, postActionTerminateInstancesRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionTerminateInstancesHandler = app
  .openapi(getActionTerminateInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionTerminateInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
