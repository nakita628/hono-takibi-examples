import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceAppManagementManagedAppPoliciesManagedAppPolicyIdRoute,
  getDeviceAppManagementManagedAppPoliciesManagedAppPolicyIdRoute,
  getDeviceAppManagementManagedAppPoliciesRoute,
  patchDeviceAppManagementManagedAppPoliciesManagedAppPolicyIdRoute,
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
  .openapi(deleteDeviceAppManagementManagedAppPoliciesManagedAppPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceAppManagementManagedAppPoliciesManagedAppPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeviceAppManagementManagedAppPoliciesManagedAppPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
