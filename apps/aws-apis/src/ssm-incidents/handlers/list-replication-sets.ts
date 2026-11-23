import { OpenAPIHono } from '@hono/zod-openapi'
import { postListReplicationSetsRoute } from '../routes'

const app = new OpenAPIHono()

export const listReplicationSetsHandler = app.openapi(postListReplicationSetsRoute, (c) => {
  throw new Error('Not implemented')
})
