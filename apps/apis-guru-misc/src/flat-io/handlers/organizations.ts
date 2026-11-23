import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationsInvitationsInvitationRoute,
  deleteOrganizationsLtiCredentialsCredentialsRoute,
  deleteOrganizationsUsersUserRoute,
  getOrganizationsInvitationsRoute,
  getOrganizationsLtiCredentialsRoute,
  getOrganizationsUsersCountRoute,
  getOrganizationsUsersRoute,
  postOrganizationsInvitationsRoute,
  postOrganizationsLtiCredentialsRoute,
  postOrganizationsUsersRoute,
  putOrganizationsUsersUserRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationsHandler = app
  .openapi(getOrganizationsInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsInvitationsInvitationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsLtiCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsLtiCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsLtiCredentialsCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsUsersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsUsersUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsUsersUserRoute, (c) => {
    throw new Error('Not implemented')
  })
