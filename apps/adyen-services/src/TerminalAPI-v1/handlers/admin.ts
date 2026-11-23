import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdminRoute } from '../routes'

const app = new OpenAPIHono()

export const adminHandler = app.openapi(postAdminRoute, (c) => {
  throw new Error('Not implemented')
})
