import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserInvitesInviteIdRoute,
  getUserInvitesRoute,
  patchUserInvitesInviteIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userSInvitesHandler = app
  .openapi(getUserInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserInvitesInviteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserInvitesInviteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
