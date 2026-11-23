import { OpenAPIHono } from '@hono/zod-openapi'
import { getRestMethodFlickrTestEchoRoute } from '../routes'

const app = new OpenAPIHono()

export const restMethodFlickrTestEchoHandler = app.openapi(
  getRestMethodFlickrTestEchoRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
