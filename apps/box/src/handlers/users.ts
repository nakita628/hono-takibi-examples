import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdAvatarRoute,
  deleteUsersUserIdEmailAliasesEmailAliasIdRoute,
  deleteUsersUserIdRoute,
  getUsersMeRoute,
  getUsersRoute,
  getUsersUserIdAvatarRoute,
  getUsersUserIdEmailAliasesRoute,
  getUsersUserIdMembershipsRoute,
  getUsersUserIdRoute,
  postUsersRoute,
  postUsersTerminateSessionsRoute,
  postUsersUserIdAvatarRoute,
  postUsersUserIdEmailAliasesRoute,
  putUsersUserIdFolders0Route,
  putUsersUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersTerminateSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdFolders0Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdEmailAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdEmailAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdEmailAliasesEmailAliasIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
