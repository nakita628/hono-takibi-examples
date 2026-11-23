import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCardInvitationsCardInvitationIdRoute,
  getCardInvitationsRoute,
  patchCardInvitationsCardInvitationIdRoute,
  postCardInvitationsCardInvitationIdCancelRoute,
  postCardInvitationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cardInvitationsHandler = app
  .openapi(postCardInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCardInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCardInvitationsCardInvitationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCardInvitationsCardInvitationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCardInvitationsCardInvitationIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
