import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminUsersDeleteUserIdRoute,
  deleteUsersTotpDeleteUserIdRoute,
  getAdminUsersRoute,
  getAdminUsersViewUserIdRoute,
  postAdminUsersAddRoute,
  postUsersInitiatePasswordResetUserIdFirstTimeResetRoute,
  putAdminUsersEditUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(postUsersInitiatePasswordResetUserIdFirstTimeResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminUsersAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminUsersEditUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminUsersDeleteUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminUsersViewUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersTotpDeleteUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
