import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdScopedRoleMemberOfScopedRoleMembershipIdRoute,
  getUsersUserIdScopedRoleMemberOfRoute,
  getUsersUserIdScopedRoleMemberOfScopedRoleMembershipIdRoute,
  patchUsersUserIdScopedRoleMemberOfScopedRoleMembershipIdRoute,
  postUsersUserIdScopedRoleMemberOfRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersScopedRoleMembershipHandler = app
  .openapi(getUsersUserIdScopedRoleMemberOfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdScopedRoleMemberOfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdScopedRoleMemberOfScopedRoleMembershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdScopedRoleMemberOfScopedRoleMembershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdScopedRoleMemberOfScopedRoleMembershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
