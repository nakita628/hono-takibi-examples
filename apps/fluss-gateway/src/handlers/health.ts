import { OpenAPIHono } from '@hono/zod-openapi'
import { getHealthRoute, getReadyRoute } from '../routes'

const app = new OpenAPIHono()

export const healthHandler = app
  .openapi(getHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReadyRoute, (c) => {
    throw new Error('Not implemented')
  })
