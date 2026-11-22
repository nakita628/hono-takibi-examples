import { OpenAPIHono } from '@hono/zod-openapi'
import { getHealthRoute, getHeartbeatRoute } from '../routes'

const app = new OpenAPIHono()

export const healthHandler = app
  .openapi(getHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHeartbeatRoute, (c) => {
    throw new Error('Not implemented')
  })
