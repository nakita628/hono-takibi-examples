import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdOutlookMasterCategoriesOutlookCategoryIdRoute,
  getUsersUserIdOutlookMasterCategoriesCountRoute,
  getUsersUserIdOutlookMasterCategoriesOutlookCategoryIdRoute,
  getUsersUserIdOutlookMasterCategoriesRoute,
  getUsersUserIdOutlookRoute,
  getUsersUserIdOutlookSupportedLanguagesRoute,
  getUsersUserIdOutlookSupportedTimeZonesRoute,
  getUsersUserIdOutlookSupportedTimeZonesTimeZoneStandardTimeZoneStandardRoute,
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
  .openapi(getUsersUserIdOutlookMasterCategoriesOutlookCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdOutlookMasterCategoriesOutlookCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdOutlookMasterCategoriesOutlookCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOutlookMasterCategoriesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOutlookSupportedLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOutlookSupportedTimeZonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOutlookSupportedTimeZonesTimeZoneStandardTimeZoneStandardRoute, (c) => {
    throw new Error('Not implemented')
  })
