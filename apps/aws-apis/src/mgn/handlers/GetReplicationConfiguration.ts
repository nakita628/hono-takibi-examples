import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetReplicationConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const GetReplicationConfigurationHandler = app.openapi(
  postGetReplicationConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
