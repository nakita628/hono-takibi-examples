import { OpenAPIHono } from '@hono/zod-openapi'
import { postStartReplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const StartReplicationHandler = app.openapi(postStartReplicationRoute, (c) => {
  throw new Error('Not implemented')
})
