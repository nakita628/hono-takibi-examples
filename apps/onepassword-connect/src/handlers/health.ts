import { OpenAPIHono } from '@hono/zod-openapi'
import { getHealthRoute, getHeartbeatRoute } from '../routes'

const app = new OpenAPIHono()

export const healthHandler = app
  .openapi(getHeartbeatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
