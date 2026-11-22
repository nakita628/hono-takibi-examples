import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteInvitationsInvitationIdRoute,
  getInvitationsInvitationIdRoute,
  getInvitationsRoute,
  patchInvitationsInvitationIdRoute,
  postInvitationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const invitationsInvitationHandler = app
  .openapi(getInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteInvitationsInvitationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInvitationsInvitationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchInvitationsInvitationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
