import { OpenAPIHono } from '@hono/zod-openapi'
import { postTagStreamRoute } from '../routes'

const app = new OpenAPIHono()

export const tagStreamHandler = app.openapi(postTagStreamRoute, (c) => {
  throw new Error('Not implemented')
})
