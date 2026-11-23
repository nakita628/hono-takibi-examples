import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdminReloadRoute } from '../routes'

const app = new OpenAPIHono()

export const adminHandler = app.openapi(postAdminReloadRoute, (c) => {
  throw new Error('Not implemented')
})
