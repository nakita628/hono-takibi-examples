import { OpenAPIHono } from '@hono/zod-openapi'
import { postVerifyHashRoute } from '../routes'

const app = new OpenAPIHono()

export const verifyHashHandler = app.openapi(postVerifyHashRoute, (c) => {
  throw new Error('Not implemented')
})
