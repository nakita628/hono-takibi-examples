import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionRebootInstancesRoute, postActionRebootInstancesRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionRebootInstancesHandler = app
  .openapi(getActionRebootInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRebootInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
