import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationInvitesInviteIdRoute,
  getOrganizationInvitesInviteIdRoute,
  getOrganizationInvitesRoute,
  postOrganizationInvitesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const invitesHandler = app
  .openapi(getOrganizationInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationInvitesInviteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationInvitesInviteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
