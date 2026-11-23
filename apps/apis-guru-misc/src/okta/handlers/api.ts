import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1UsersUserIdSessionsRoute,
  getApiV1UsersMeRoute,
  getApiV1UsersRoute,
  getApiV1UsersUserIdAppLinksRoute,
  getApiV1UsersUserIdGroupsRoute,
  getApiV1UsersUserIdRoute,
  postApiV1UsersRoute,
  postApiV1UsersUserIdCredentialsChangePasswordRoute,
  postApiV1UsersUserIdCredentialsChangeRecoveryQuestionRoute,
  postApiV1UsersUserIdCredentialsForgotPasswordRoute,
  postApiV1UsersUserIdLifecycleActivateRoute,
  postApiV1UsersUserIdLifecycleDeactivateRoute,
  postApiV1UsersUserIdLifecycleExpirePasswordRoute,
  postApiV1UsersUserIdLifecycleResetFactorsRoute,
  postApiV1UsersUserIdLifecycleResetPasswordRoute,
  postApiV1UsersUserIdLifecycleSuspendRoute,
  postApiV1UsersUserIdLifecycleUnlockRoute,
  postApiV1UsersUserIdLifecycleUnsuspendRoute,
  putApiV1UsersUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiV1UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersUserIdAppLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersUserIdCredentialsChangePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersUserIdCredentialsChangeRecoveryQuestionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersUserIdCredentialsForgotPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersUserIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersUserIdLifecycleActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersUserIdLifecycleDeactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersUserIdLifecycleExpirePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersUserIdLifecycleResetFactorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersUserIdLifecycleResetPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersUserIdLifecycleSuspendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersUserIdLifecycleUnlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersUserIdLifecycleUnsuspendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1UsersUserIdSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
