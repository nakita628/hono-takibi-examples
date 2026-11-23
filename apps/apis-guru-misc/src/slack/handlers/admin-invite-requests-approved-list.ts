import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdminInviteRequestsApprovedListRoute } from '../routes'

const app = new OpenAPIHono()

export const adminInviteRequestsApprovedListHandler = app.openapi(
  getAdminInviteRequestsApprovedListRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
