import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceAppManagementMdmWindowsInformationProtectionPoliciesMdmWindowsInformationProtectionPolicyIdRoute,
  getDeviceAppManagementMdmWindowsInformationProtectionPoliciesMdmWindowsInformationProtectionPolicyIdRoute,
  getDeviceAppManagementMdmWindowsInformationProtectionPoliciesRoute,
  patchDeviceAppManagementMdmWindowsInformationProtectionPoliciesMdmWindowsInformationProtectionPolicyIdRoute,
  postDeviceAppManagementMdmWindowsInformationProtectionPoliciesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceAppManagementMdmWindowsInformationProtectionPolicyHandler = app
  .openapi(getDeviceAppManagementMdmWindowsInformationProtectionPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceAppManagementMdmWindowsInformationProtectionPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteDeviceAppManagementMdmWindowsInformationProtectionPoliciesMdmWindowsInformationProtectionPolicyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementMdmWindowsInformationProtectionPoliciesMdmWindowsInformationProtectionPolicyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceAppManagementMdmWindowsInformationProtectionPoliciesMdmWindowsInformationProtectionPolicyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
