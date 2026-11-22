import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFactorsFactorIdRoute,
  deleteFactorsRecoveryCodesRoute,
  deleteUserIdentitiesIdentityIdRoute,
  deleteUserOauthGrantsRoute,
  getFactorsRecoveryCodesRoute,
  getUserIdentitiesAuthorizeRoute,
  getUserOauthGrantsRoute,
  getUserRoute,
  postFactorsFactorIdChallengeRoute,
  postFactorsFactorIdVerifyRoute,
  postFactorsRecoveryCodesRegenerateRoute,
  postFactorsRecoveryCodesRoute,
  postFactorsRecoveryCodesVerifyRoute,
  postFactorsRoute,
  postReauthenticateRoute,
  putUserRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(getUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserIdentitiesAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserIdentitiesIdentityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserOauthGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserOauthGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReauthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFactorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFactorsFactorIdChallengeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFactorsFactorIdVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFactorsFactorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFactorsRecoveryCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFactorsRecoveryCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFactorsRecoveryCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFactorsRecoveryCodesVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFactorsRecoveryCodesRegenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
