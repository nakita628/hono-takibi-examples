import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1OrgsOrgIdInvitesInviteIdRoute,
  postApiV1OrgsOrgIdInvitesRoute,
  putApiV1OrgsOrgIdInvitesInviteIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsInvitesHandler = app
  .openapi(postApiV1OrgsOrgIdInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdInvitesInviteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdInvitesInviteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
