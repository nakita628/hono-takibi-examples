import { OpenAPIHono } from '@hono/zod-openapi'
import { postAuthDeleteRoute } from '../routes'

const app = new OpenAPIHono()

export const authDeleteHandler = app.openapi(postAuthDeleteRoute, (c) => {
  throw new Error('Not implemented')
})
