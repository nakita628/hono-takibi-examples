import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminUsersUserIdRoute,
  getAdminUsersUserIdAuthTokensRoute,
  postAdminUsersRoute,
  postAdminUsersUserIdDisableRoute,
  postAdminUsersUserIdEnableRoute,
  postAdminUsersUserIdLogoutRoute,
  postAdminUsersUserIdRevokeAuthTokenRoute,
  putAdminUsersUserIdPasswordRoute,
  putAdminUsersUserIdPermissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adminUsersHandler = app
  .openapi(postAdminUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminUsersUserIdAuthTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminUsersUserIdDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminUsersUserIdEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminUsersUserIdLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminUsersUserIdPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminUsersUserIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminUsersUserIdRevokeAuthTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
