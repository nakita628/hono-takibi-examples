import { OpenAPIHono } from '@hono/zod-openapi'
import { getShareInvitationsRoute, patchShareInvitationsShareInvitationIdRoute } from '../routes'

const app = new OpenAPIHono()

export const shareInvitationsHandler = app
  .openapi(getShareInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchShareInvitationsShareInvitationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
