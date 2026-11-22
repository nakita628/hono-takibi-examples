import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreateReplicationSetRoute } from '../routes'

const app = new OpenAPIHono()

export const createReplicationSetHandler = app.openapi(postCreateReplicationSetRoute, (c) => {
  throw new Error('Not implemented')
})
