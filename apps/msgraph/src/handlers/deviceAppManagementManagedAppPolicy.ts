import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceAppManagementManagedAppPoliciesManagedAppPolicyIdRoute,
  getDeviceAppManagementManagedAppPoliciesCountRoute,
  getDeviceAppManagementManagedAppPoliciesManagedAppPolicyIdRoute,
  getDeviceAppManagementManagedAppPoliciesRoute,
  patchDeviceAppManagementManagedAppPoliciesManagedAppPolicyIdRoute,
  postDeviceAppManagementManagedAppPoliciesManagedAppPolicyIdTargetAppsRoute,
  postDeviceAppManagementManagedAppPoliciesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceAppManagementManagedAppPolicyHandler = app
  .openapi(getDeviceAppManagementManagedAppPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceAppManagementManagedAppPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceAppManagementManagedAppPoliciesManagedAppPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeviceAppManagementManagedAppPoliciesManagedAppPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDeviceAppManagementManagedAppPoliciesManagedAppPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceAppManagementManagedAppPoliciesManagedAppPolicyIdTargetAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceAppManagementManagedAppPoliciesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
