import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserManagementInvitationsByTokenTokenRoute,
  getUserManagementInvitationsIdRoute,
  getUserManagementInvitationsRoute,
  postUserManagementInvitationsIdAcceptRoute,
  postUserManagementInvitationsIdResendRoute,
  postUserManagementInvitationsIdRevokeRoute,
  postUserManagementInvitationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userManagementInvitationsHandler = app
  .openapi(getUserManagementInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserManagementInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementInvitationsByTokenTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementInvitationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserManagementInvitationsIdAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserManagementInvitationsIdResendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserManagementInvitationsIdRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
