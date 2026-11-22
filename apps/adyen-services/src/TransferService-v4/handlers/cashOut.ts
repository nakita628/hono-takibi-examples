import { OpenAPIHono } from '@hono/zod-openapi'
import { postCashoutsRoute } from '../routes'

const app = new OpenAPIHono()

export const cashOutHandler = app.openapi(postCashoutsRoute, (c) => {
  throw new Error('Not implemented')
})
