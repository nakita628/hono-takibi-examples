import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeConnectorProfilesRoute } from '../routes'

const app = new OpenAPIHono()

export const describeConnectorProfilesHandler = app.openapi(
  postDescribeConnectorProfilesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
