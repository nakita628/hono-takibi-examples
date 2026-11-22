import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdOutlookMasterCategoriesOutlookCategoryIdRoute,
  getUsersUserIdOutlookMasterCategoriesOutlookCategoryIdRoute,
  getUsersUserIdOutlookMasterCategoriesRoute,
  getUsersUserIdOutlookRoute,
  patchUsersUserIdOutlookMasterCategoriesOutlookCategoryIdRoute,
  postUsersUserIdOutlookMasterCategoriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersOutlookUserHandler = app
  .openapi(getUsersUserIdOutlookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOutlookMasterCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdOutlookMasterCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdOutlookMasterCategoriesOutlookCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOutlookMasterCategoriesOutlookCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdOutlookMasterCategoriesOutlookCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
