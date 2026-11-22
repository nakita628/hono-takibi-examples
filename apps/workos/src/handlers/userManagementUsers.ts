import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserManagementUsersIdRoute,
  getUserManagementEmailVerificationIdRoute,
  getUserManagementPasswordResetIdRoute,
  getUserManagementUsersExternalIdExternalIdRoute,
  getUserManagementUsersIdIdentitiesRoute,
  getUserManagementUsersIdRoute,
  getUserManagementUsersIdSessionsRoute,
  getUserManagementUsersRoute,
  postUserManagementPasswordResetConfirmRoute,
  postUserManagementPasswordResetRoute,
  postUserManagementUsersIdEmailChangeConfirmRoute,
  postUserManagementUsersIdEmailChangeSendRoute,
  postUserManagementUsersIdEmailVerificationConfirmRoute,
  postUserManagementUsersIdEmailVerificationSendRoute,
  postUserManagementUsersRoute,
  putUserManagementUsersIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userManagementUsersHandler = app
  .openapi(getUserManagementEmailVerificationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserManagementPasswordResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserManagementPasswordResetConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementPasswordResetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserManagementUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementUsersExternalIdExternalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserManagementUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserManagementUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserManagementUsersIdEmailChangeConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserManagementUsersIdEmailChangeSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserManagementUsersIdEmailVerificationConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserManagementUsersIdEmailVerificationSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementUsersIdIdentitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementUsersIdSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
