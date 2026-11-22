import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceAppManagementMobileAppCategoriesMobileAppCategoryIdRoute,
  getDeviceAppManagementMobileAppCategoriesCountRoute,
  getDeviceAppManagementMobileAppCategoriesMobileAppCategoryIdRoute,
  getDeviceAppManagementMobileAppCategoriesRoute,
  patchDeviceAppManagementMobileAppCategoriesMobileAppCategoryIdRoute,
  postDeviceAppManagementMobileAppCategoriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceAppManagementMobileAppCategoryHandler = app
  .openapi(getDeviceAppManagementMobileAppCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceAppManagementMobileAppCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceAppManagementMobileAppCategoriesMobileAppCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeviceAppManagementMobileAppCategoriesMobileAppCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDeviceAppManagementMobileAppCategoriesMobileAppCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceAppManagementMobileAppCategoriesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
