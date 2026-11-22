import { OpenAPIHono } from '@hono/zod-openapi'
import { getAntichessRoute, getAtomicRoute, getStandardRoute } from '../routes'

const app = new OpenAPIHono()

export const tablebaseHandler = app
  .openapi(getStandardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAtomicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAntichessRoute, (c) => {
    throw new Error('Not implemented')
  })
