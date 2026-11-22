import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserInvitesUserInviteIdRoute,
  getTailnetTailnetUserInvitesRoute,
  getUserInvitesUserInviteIdRoute,
  postTailnetTailnetUserInvitesRoute,
  postUserInvitesUserInviteIdResendRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userInvitesHandler = app
  .openapi(getTailnetTailnetUserInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTailnetTailnetUserInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserInvitesUserInviteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserInvitesUserInviteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserInvitesUserInviteIdResendRoute, (c) => {
    throw new Error('Not implemented')
  })
