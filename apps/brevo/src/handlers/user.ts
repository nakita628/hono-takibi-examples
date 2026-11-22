import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOrganizationInvitedUsersRoute,
  getOrganizationUserEmailPermissionsRoute,
  postOrganizationUserInvitationSendRoute,
  postOrganizationUserUpdatePermissionsRoute,
  putOrganizationUserInvitationActionEmailRoute,
  putOrganizationUserInvitationRevokeEmailRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(getOrganizationInvitedUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationUserInvitationRevokeEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationUserInvitationSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationUserInvitationActionEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationUserUpdatePermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationUserEmailPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
