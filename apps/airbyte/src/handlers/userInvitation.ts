import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1UserInvitationsByCodeInviteCodeRoute,
  postV1UserInvitationsAcceptRoute,
  postV1UserInvitationsCancelRoute,
  postV1UserInvitationsCreateRoute,
  postV1UserInvitationsDeclineRoute,
  postV1UserInvitationsListPendingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userInvitationHandler = app
  .openapi(postV1UserInvitationsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UserInvitationsByCodeInviteCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UserInvitationsListPendingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UserInvitationsAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UserInvitationsDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UserInvitationsCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
