import { OpenAPIHono } from '@hono/zod-openapi'
import { postAnythingBasicRoute, postAnythingBearerRoute } from '../routes'

const app = new OpenAPIHono()

export const httpHandler = app
  .openapi(postAnythingBasicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnythingBearerRoute, (c) => {
    throw new Error('Not implemented')
  })
