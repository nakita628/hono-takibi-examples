import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateSourceServerReplicationTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const updateSourceServerReplicationTypeHandler = app.openapi(
  postUpdateSourceServerReplicationTypeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
