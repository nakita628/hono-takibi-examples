import { OpenAPIHono } from '@hono/zod-openapi'
import { getRoute, headRoute } from '../routes'

const app = new OpenAPIHono()

export const __rootHandler = app
  .openapi(getRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headRoute, (c) => {
    throw new Error('Not implemented')
  })
