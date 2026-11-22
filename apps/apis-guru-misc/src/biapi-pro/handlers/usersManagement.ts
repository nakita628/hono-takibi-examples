import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersIdUserConfigRoute,
  getUsersIdUserConfigRoute,
  getUsersIdUserProfilesIdProfileRoute,
  getUsersIdUserProfilesMainRoute,
  getUsersIdUserProfilesRoute,
  getUsersIdUserRoute,
  getUsersRoute,
  postUsersIdUserConfigRoute,
  postUsersIdUserTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersManagementHandler = app
  .openapi(getUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersIdUserConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdUserConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersIdUserConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdUserProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdUserProfilesMainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdUserProfilesIdProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersIdUserTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
