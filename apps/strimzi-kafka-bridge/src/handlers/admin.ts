import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdminTopicsRoute } from '../routes'

const app = new OpenAPIHono()

export const adminHandler = app.openapi(postAdminTopicsRoute, (c) => {
  throw new Error('Not implemented')
})
