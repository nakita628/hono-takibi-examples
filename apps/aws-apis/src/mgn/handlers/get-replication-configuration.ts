import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetReplicationConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const getReplicationConfigurationHandler = app.openapi(
  postGetReplicationConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
