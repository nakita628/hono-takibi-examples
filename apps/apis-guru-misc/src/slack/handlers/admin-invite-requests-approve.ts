import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdminInviteRequestsApproveRoute } from '../routes'

const app = new OpenAPIHono()

export const adminInviteRequestsApproveHandler = app.openapi(
  postAdminInviteRequestsApproveRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
