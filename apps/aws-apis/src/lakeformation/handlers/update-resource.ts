import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const updateResourceHandler = app.openapi(postUpdateResourceRoute, (c) => {
  throw new Error('Not implemented')
})
