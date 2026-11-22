import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdminInviteRequestsDeniedListRoute } from '../routes'

const app = new OpenAPIHono()

export const adminInviteRequestsDeniedHandler = app.openapi(
  getAdminInviteRequestsDeniedListRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
