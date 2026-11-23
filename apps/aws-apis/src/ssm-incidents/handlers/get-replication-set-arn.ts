import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetReplicationSetArnRoute } from '../routes'

const app = new OpenAPIHono()

export const getReplicationSetArnHandler = app.openapi(getGetReplicationSetArnRoute, (c) => {
  throw new Error('Not implemented')
})
