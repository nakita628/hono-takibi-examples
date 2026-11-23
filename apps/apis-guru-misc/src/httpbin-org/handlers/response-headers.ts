import { OpenAPIHono } from '@hono/zod-openapi'
import { getResponseHeadersRoute, postResponseHeadersRoute } from '../routes'

const app = new OpenAPIHono()

export const responseHeadersHandler = app
  .openapi(getResponseHeadersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postResponseHeadersRoute, (c) => {
    throw new Error('Not implemented')
  })
