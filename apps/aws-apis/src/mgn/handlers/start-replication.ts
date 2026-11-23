import { OpenAPIHono } from '@hono/zod-openapi'
import { postStartReplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const startReplicationHandler = app.openapi(postStartReplicationRoute, (c) => {
  throw new Error('Not implemented')
})
