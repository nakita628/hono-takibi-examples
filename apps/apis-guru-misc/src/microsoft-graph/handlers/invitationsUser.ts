import { OpenAPIHono } from '@hono/zod-openapi'
import { getInvitationsInvitationIdInvitedUserRoute } from '../routes'

const app = new OpenAPIHono()

export const invitationsUserHandler = app.openapi(
  getInvitationsInvitationIdInvitedUserRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
