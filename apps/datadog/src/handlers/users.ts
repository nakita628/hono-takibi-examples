import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2UsersUserIdInvitationsRoute,
  deleteApiV2UsersUserIdRoute,
  getApiV2CurrentUserRoute,
  getApiV2UserInvitationsUserInvitationUuidRoute,
  getApiV2UsersRoute,
  getApiV2UsersUserIdIdentityProvidersRoute,
  getApiV2UsersUserIdOrgsRoute,
  getApiV2UsersUserIdPermissionsRoute,
  getApiV2UsersUserIdRoute,
  patchApiV2CurrentUserRoute,
  patchApiV2UsersUserIdRelationshipsIdentityProvidersRoute,
  patchApiV2UsersUserIdRoute,
  postApiV2UserInvitationsRoute,
  postApiV2UsersRoute,
  putApiV2AnonymizeUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(putApiV2AnonymizeUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CurrentUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2CurrentUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UserInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UserInvitationsUserInvitationUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdIdentityProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2UsersUserIdInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdOrgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2UsersUserIdRelationshipsIdentityProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
