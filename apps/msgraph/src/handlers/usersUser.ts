import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdRoute,
  deleteUsersUserPrincipalNameUserPrincipalNameRoute,
  getUsersCountRoute,
  getUsersRoute,
  getUsersUserIdRoute,
  getUsersUserPrincipalNameUserPrincipalNameRoute,
  patchUsersUserIdRoute,
  patchUsersUserPrincipalNameUserPrincipalNameRoute,
  postUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersUserHandler = app
  .openapi(getUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserPrincipalNameUserPrincipalNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserPrincipalNameUserPrincipalNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserPrincipalNameUserPrincipalNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
