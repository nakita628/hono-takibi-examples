import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceAppManagementMobileAppsMobileAppIdAssignmentsMobileAppAssignmentIdRoute,
  deleteDeviceAppManagementMobileAppsMobileAppIdRoute,
  getDeviceAppManagementMobileAppsMobileAppIdAssignmentsMobileAppAssignmentIdRoute,
  getDeviceAppManagementMobileAppsMobileAppIdAssignmentsRoute,
  getDeviceAppManagementMobileAppsMobileAppIdCategoriesMobileAppCategoryIdRoute,
  getDeviceAppManagementMobileAppsMobileAppIdCategoriesRoute,
  getDeviceAppManagementMobileAppsMobileAppIdRoute,
  getDeviceAppManagementMobileAppsRoute,
  patchDeviceAppManagementMobileAppsMobileAppIdAssignmentsMobileAppAssignmentIdRoute,
  patchDeviceAppManagementMobileAppsMobileAppIdRoute,
  postDeviceAppManagementMobileAppsMobileAppIdAssignmentsRoute,
  postDeviceAppManagementMobileAppsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceAppManagementMobileAppHandler = app
  .openapi(getDeviceAppManagementMobileAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceAppManagementMobileAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDeviceAppManagementMobileAppsMobileAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceAppManagementMobileAppsMobileAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeviceAppManagementMobileAppsMobileAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceAppManagementMobileAppsMobileAppIdAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceAppManagementMobileAppsMobileAppIdAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteDeviceAppManagementMobileAppsMobileAppIdAssignmentsMobileAppAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementMobileAppsMobileAppIdAssignmentsMobileAppAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceAppManagementMobileAppsMobileAppIdAssignmentsMobileAppAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceAppManagementMobileAppsMobileAppIdCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceAppManagementMobileAppsMobileAppIdCategoriesMobileAppCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
