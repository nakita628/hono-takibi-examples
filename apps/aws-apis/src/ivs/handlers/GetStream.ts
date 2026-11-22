import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetStreamRoute } from '../routes'

const app = new OpenAPIHono()

export const GetStreamHandler = app.openapi(postGetStreamRoute, (c) => {
  throw new Error('Not implemented')
})
