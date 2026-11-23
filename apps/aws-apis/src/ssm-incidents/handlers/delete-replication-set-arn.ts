import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteReplicationSetArnRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteReplicationSetArnHandler = app.openapi(postDeleteReplicationSetArnRoute, (c) => {
  throw new Error('Not implemented')
})
