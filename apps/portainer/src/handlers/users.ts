import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersIdHelmRepositoriesRepositoryIDRoute,
  deleteUsersIdRoute,
  deleteUsersIdTokensKeyIDRoute,
  getUsersAdminCheckRoute,
  getUsersIdEffectiveAccessRoute,
  getUsersIdHelmRepositoriesRoute,
  getUsersIdMembershipsRoute,
  getUsersIdRoute,
  getUsersIdTokensRoute,
  getUsersMeRoute,
  getUsersRoute,
  postUsersAdminInitRoute,
  postUsersIdHelmRepositoriesRoute,
  postUsersIdTokensRoute,
  postUsersRoute,
  putUsersIdPasswdRoute,
  putUsersIdRoute,
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
  .openapi(putUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdEffectiveAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdHelmRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersIdHelmRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersIdHelmRepositoriesRepositoryIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersIdPasswdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersIdTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersIdTokensKeyIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersAdminCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersAdminInitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
