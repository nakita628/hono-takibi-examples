import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersIdRoute,
  getUsersIdRoute,
  getUsersRoute,
  getUsersUserIdApiKeysRoute,
  getUsersUserIdCipherUsesRoute,
  getUsersUserIdGroupsRoute,
  getUsersUserIdPermissionsRoute,
  getUsersUserIdPublicKeysRoute,
  patchUsersIdRoute,
  postUsersId2faResetRoute,
  postUsersIdResendWelcomeEmailRoute,
  postUsersIdUnlockRoute,
  postUsersRoute,
  postUsersUserIdApiKeysRoute,
  postUsersUserIdPublicKeysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersId2faResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersIdResendWelcomeEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersIdUnlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCipherUsesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPublicKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdPublicKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
