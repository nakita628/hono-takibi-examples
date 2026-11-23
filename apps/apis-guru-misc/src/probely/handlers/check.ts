import { OpenAPIHono } from '@hono/zod-openapi'
import { postCheckIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const checkHandler = app.openapi(postCheckIndexRoute, (c) => {
  throw new Error('Not implemented')
})
