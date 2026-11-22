import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserManagementUsersUserIdConnectedAccountsSlugRoute,
  getUserManagementUsersUserIdConnectedAccountsSlugRoute,
  getUserManagementUsersUserIdDataProvidersRoute,
  postUserManagementUsersUserIdConnectedAccountsSlugRoute,
  putUserManagementUsersUserIdConnectedAccountsSlugRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userManagementDataProvidersHandler = app
  .openapi(getUserManagementUsersUserIdConnectedAccountsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserManagementUsersUserIdConnectedAccountsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserManagementUsersUserIdConnectedAccountsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserManagementUsersUserIdConnectedAccountsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementUsersUserIdDataProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
