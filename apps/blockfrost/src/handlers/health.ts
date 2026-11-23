import { OpenAPIHono } from '@hono/zod-openapi'
import { getHealthClockRoute, getHealthRoute } from '../routes'

const app = new OpenAPIHono()

export const healthHandler = app
  .openapi(getHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHealthClockRoute, (c) => {
    throw new Error('Not implemented')
  })
