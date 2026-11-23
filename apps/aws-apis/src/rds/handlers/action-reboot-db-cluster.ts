import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionRebootDBClusterRoute, postActionRebootDBClusterRoute } from '../routes'

const app = new OpenAPIHono()

export const actionRebootDbClusterHandler = app
  .openapi(getActionRebootDBClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRebootDBClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
