import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getInvitationsInvitedUserSponsorsCountRoute,
  getInvitationsInvitedUserSponsorsDirectoryObjectIdRoute,
  getInvitationsInvitedUserSponsorsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const invitationsDirectoryObjectHandler = app
  .openapi(getInvitationsInvitedUserSponsorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInvitationsInvitedUserSponsorsDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInvitationsInvitedUserSponsorsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
