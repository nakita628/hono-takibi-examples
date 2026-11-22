import { OpenAPIHono } from '@hono/zod-openapi'
import { postEvents202609SendRoute } from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app.openapi(postEvents202609SendRoute, (c) => {
  throw new Error('Not implemented')
})
