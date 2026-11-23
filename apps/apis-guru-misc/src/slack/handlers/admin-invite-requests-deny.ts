import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdminInviteRequestsDenyRoute } from '../routes'

const app = new OpenAPIHono()

export const adminInviteRequestsDenyHandler = app.openapi(postAdminInviteRequestsDenyRoute, (c) => {
  throw new Error('Not implemented')
})
