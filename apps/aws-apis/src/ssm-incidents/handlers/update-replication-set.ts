import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateReplicationSetRoute } from '../routes'

const app = new OpenAPIHono()

export const updateReplicationSetHandler = app.openapi(postUpdateReplicationSetRoute, (c) => {
  throw new Error('Not implemented')
})
