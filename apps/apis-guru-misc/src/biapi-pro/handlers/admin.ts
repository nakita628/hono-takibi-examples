import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdminJwtRoute } from '../routes'

const app = new OpenAPIHono()

export const adminHandler = app.openapi(postAdminJwtRoute, (c) => {
  throw new Error('Not implemented')
})
