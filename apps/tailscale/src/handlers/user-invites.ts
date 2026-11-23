import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserInvitesUserInviteIdRoute,
  getUserInvitesUserInviteIdRoute,
  postUserInvitesUserInviteIdResendRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userInvitesHandler = app
  .openapi(getUserInvitesUserInviteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserInvitesUserInviteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserInvitesUserInviteIdResendRoute, (c) => {
    throw new Error('Not implemented')
  })
