import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreateStreamRoute } from '../routes'

const app = new OpenAPIHono()

export const createStreamHandler = app.openapi(postCreateStreamRoute, (c) => {
  throw new Error('Not implemented')
})
