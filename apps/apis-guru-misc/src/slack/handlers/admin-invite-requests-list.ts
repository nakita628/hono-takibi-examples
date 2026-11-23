import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdminInviteRequestsListRoute } from '../routes'

const app = new OpenAPIHono()

export const adminInviteRequestsListHandler = app.openapi(getAdminInviteRequestsListRoute, (c) => {
  throw new Error('Not implemented')
})
