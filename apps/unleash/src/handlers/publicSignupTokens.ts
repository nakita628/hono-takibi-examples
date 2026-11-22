import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiAdminInviteLinkTokensRoute,
  getApiAdminInviteLinkTokensTokenRoute,
  getInviteTokenValidateRoute,
  postApiAdminInviteLinkTokensRoute,
  postInviteTokenSignupRoute,
  putApiAdminInviteLinkTokensTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const publicSignupTokensHandler = app
  .openapi(getInviteTokenValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInviteTokenSignupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminInviteLinkTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminInviteLinkTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminInviteLinkTokensTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAdminInviteLinkTokensTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
