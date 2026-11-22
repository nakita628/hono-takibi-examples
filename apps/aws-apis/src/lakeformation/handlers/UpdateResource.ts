import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const UpdateResourceHandler = app.openapi(postUpdateResourceRoute, (c) => {
  throw new Error('Not implemented')
})
