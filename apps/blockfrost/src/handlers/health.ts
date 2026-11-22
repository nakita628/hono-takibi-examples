import { OpenAPIHono } from '@hono/zod-openapi'
import { getHealthClockRoute, getHealthRoute, getRoute } from '../routes'

const app = new OpenAPIHono()

export const healthHandler = app
  .openapi(getRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHealthClockRoute, (c) => {
    throw new Error('Not implemented')
  })
