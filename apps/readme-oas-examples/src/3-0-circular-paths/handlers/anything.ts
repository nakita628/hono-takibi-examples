import { OpenAPIHono } from '@hono/zod-openapi'
import { getAnythingRoute, postAnythingRoute, putAnythingRoute } from '../routes'

const app = new OpenAPIHono()

export const anythingHandler = app
  .openapi(getAnythingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnythingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAnythingRoute, (c) => {
    throw new Error('Not implemented')
  })
