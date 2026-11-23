import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersIdentitiesIdentityIdRoute,
  deleteUsersUserIdMfaAuthenticatorsTypeRoute,
  deleteUsersUserIdRoute,
  deleteUsersUserIdSessionsRoute,
  deleteUsersUserIdSessionsSessionIdRoute,
  deleteUsersUserIdTargetsTargetIdRoute,
  getUsersIdentitiesRoute,
  getUsersRoute,
  getUsersUserIdLogsRoute,
  getUsersUserIdMembershipsRoute,
  getUsersUserIdMfaFactorsRoute,
  getUsersUserIdMfaRecoveryCodesRoute,
  getUsersUserIdPrefsRoute,
  getUsersUserIdRoute,
  getUsersUserIdSessionsRoute,
  getUsersUserIdTargetsRoute,
  getUsersUserIdTargetsTargetIdRoute,
  patchUsersUserIdEmailRoute,
  patchUsersUserIdMfaRecoveryCodesRoute,
  patchUsersUserIdMfaRoute,
  patchUsersUserIdNameRoute,
  patchUsersUserIdPasswordRoute,
  patchUsersUserIdPhoneRoute,
  patchUsersUserIdPrefsRoute,
  patchUsersUserIdStatusRoute,
  patchUsersUserIdTargetsTargetIdRoute,
  patchUsersUserIdVerificationPhoneRoute,
  patchUsersUserIdVerificationRoute,
  postUsersArgon2Route,
  postUsersBcryptRoute,
  postUsersMd5Route,
  postUsersPhpassRoute,
  postUsersRoute,
  postUsersScryptModifiedRoute,
  postUsersScryptRoute,
  postUsersShaRoute,
  postUsersUserIdJwtsRoute,
  postUsersUserIdSessionsRoute,
  postUsersUserIdTargetsRoute,
  postUsersUserIdTokensRoute,
  putUsersUserIdLabelsRoute,
  putUsersUserIdMfaRecoveryCodesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersArgon2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersBcryptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdentitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersIdentitiesIdentityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersMd5Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersPhpassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersScryptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersScryptModifiedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersShaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdJwtsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdMfaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdMfaAuthenticatorsTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMfaFactorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMfaRecoveryCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdMfaRecoveryCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdMfaRecoveryCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdPhoneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPrefsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdPrefsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdSessionsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTargetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdTargetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTargetsTargetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdTargetsTargetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdTargetsTargetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdVerificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdVerificationPhoneRoute, (c) => {
    throw new Error('Not implemented')
  })
