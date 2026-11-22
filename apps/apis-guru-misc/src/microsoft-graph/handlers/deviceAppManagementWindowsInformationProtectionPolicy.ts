import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceAppManagementWindowsInformationProtectionPoliciesWindowsInformationProtectionPolicyIdRoute,
  getDeviceAppManagementWindowsInformationProtectionPoliciesRoute,
  getDeviceAppManagementWindowsInformationProtectionPoliciesWindowsInformationProtectionPolicyIdRoute,
  patchDeviceAppManagementWindowsInformationProtectionPoliciesWindowsInformationProtectionPolicyIdRoute,
  postDeviceAppManagementWindowsInformationProtectionPoliciesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceAppManagementWindowsInformationProtectionPolicyHandler = app
  .openapi(getDeviceAppManagementWindowsInformationProtectionPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceAppManagementWindowsInformationProtectionPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteDeviceAppManagementWindowsInformationProtectionPoliciesWindowsInformationProtectionPolicyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementWindowsInformationProtectionPoliciesWindowsInformationProtectionPolicyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceAppManagementWindowsInformationProtectionPoliciesWindowsInformationProtectionPolicyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
