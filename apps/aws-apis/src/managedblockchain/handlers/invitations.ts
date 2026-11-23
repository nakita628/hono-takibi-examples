import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteInvitationsInvitationIdRoute, getInvitationsRoute } from '../routes'

const app = new OpenAPIHono()

export const invitationsHandler = app
  .openapi(getInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteInvitationsInvitationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
