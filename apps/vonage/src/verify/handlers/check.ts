import { OpenAPIHono } from '@hono/zod-openapi'
import { postCheckFormatRoute } from '../routes'

const app = new OpenAPIHono()

export const checkHandler = app.openapi(postCheckFormatRoute, (c) => {
  throw new Error('Not implemented')
})
