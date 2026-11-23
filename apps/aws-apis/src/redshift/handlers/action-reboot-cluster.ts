import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionRebootClusterRoute, postActionRebootClusterRoute } from '../routes'

const app = new OpenAPIHono()

export const actionRebootClusterHandler = app
  .openapi(getActionRebootClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRebootClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
