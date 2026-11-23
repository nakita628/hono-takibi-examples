import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateReplicationConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const updateReplicationConfigurationHandler = app.openapi(
  postUpdateReplicationConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
