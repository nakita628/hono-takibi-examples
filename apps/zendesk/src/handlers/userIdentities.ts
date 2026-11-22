import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2EndUsersUserIdIdentitiesUserIdentityIdRoute,
  deleteApiV2UsersUserIdIdentitiesUserIdentityIdRoute,
  getApiV2EndUsersUserIdIdentitiesRoute,
  getApiV2EndUsersUserIdIdentitiesUserIdentityIdRoute,
  getApiV2UsersUserIdIdentitiesRoute,
  getApiV2UsersUserIdIdentitiesUserIdentityIdRoute,
  postApiV2EndUsersUserIdIdentitiesRoute,
  postApiV2UsersUserIdIdentitiesRoute,
  putApiV2EndUsersUserIdIdentitiesUserIdentityIdMakePrimaryRoute,
  putApiV2EndUsersUserIdIdentitiesUserIdentityIdRequestVerificationRoute,
  putApiV2UsersUserIdIdentitiesUserIdentityIdMakePrimaryRoute,
  putApiV2UsersUserIdIdentitiesUserIdentityIdRequestVerificationRoute,
  putApiV2UsersUserIdIdentitiesUserIdentityIdRoute,
  putApiV2UsersUserIdIdentitiesUserIdentityIdVerifyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userIdentitiesHandler = app
  .openapi(getApiV2EndUsersUserIdIdentitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2EndUsersUserIdIdentitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EndUsersUserIdIdentitiesUserIdentityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2EndUsersUserIdIdentitiesUserIdentityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2EndUsersUserIdIdentitiesUserIdentityIdMakePrimaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2EndUsersUserIdIdentitiesUserIdentityIdRequestVerificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdIdentitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UsersUserIdIdentitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdIdentitiesUserIdentityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2UsersUserIdIdentitiesUserIdentityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2UsersUserIdIdentitiesUserIdentityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2UsersUserIdIdentitiesUserIdentityIdMakePrimaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2UsersUserIdIdentitiesUserIdentityIdRequestVerificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2UsersUserIdIdentitiesUserIdentityIdVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
