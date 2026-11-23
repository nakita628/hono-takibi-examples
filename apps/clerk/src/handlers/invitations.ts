import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteInvitationsInvitationIdRoute,
  getInvitationsRoute,
  postInvitationsBulkRoute,
  postInvitationsInvitationIdRevokeRoute,
  postInvitationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const invitationsHandler = app
  .openapi(postInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvitationsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteInvitationsInvitationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvitationsInvitationIdRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
