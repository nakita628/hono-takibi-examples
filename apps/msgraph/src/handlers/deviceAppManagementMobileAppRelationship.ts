import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceAppManagementMobileAppRelationshipsMobileAppRelationshipIdRoute,
  getDeviceAppManagementMobileAppRelationshipsCountRoute,
  getDeviceAppManagementMobileAppRelationshipsMobileAppRelationshipIdRoute,
  getDeviceAppManagementMobileAppRelationshipsRoute,
  patchDeviceAppManagementMobileAppRelationshipsMobileAppRelationshipIdRoute,
  postDeviceAppManagementMobileAppRelationshipsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceAppManagementMobileAppRelationshipHandler = app
  .openapi(getDeviceAppManagementMobileAppRelationshipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceAppManagementMobileAppRelationshipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceAppManagementMobileAppRelationshipsMobileAppRelationshipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeviceAppManagementMobileAppRelationshipsMobileAppRelationshipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDeviceAppManagementMobileAppRelationshipsMobileAppRelationshipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceAppManagementMobileAppRelationshipsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
