import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceAppManagementWindowsInformationProtectionPoliciesWindowsInformationProtectionPolicyIdAssignmentsTargetedManagedAppPolicyAssignmentIdRoute,
  deleteDeviceAppManagementWindowsInformationProtectionPoliciesWindowsInformationProtectionPolicyIdExemptAppLockerFilesWindowsInformationProtectionAppLockerFileIdRoute,
  deleteDeviceAppManagementWindowsInformationProtectionPoliciesWindowsInformationProtectionPolicyIdProtectedAppLockerFilesWindowsInformationProtectionAppLockerFileIdRoute,
  deleteDeviceAppManagementWindowsInformationProtectionPoliciesWindowsInformationProtectionPolicyIdRoute,
  getDeviceAppManagementWindowsInformationProtectionPoliciesCountRoute,
  getDeviceAppManagementWindowsInformationProtectionPoliciesRoute,
  getDeviceAppManagementWindowsInformationProtectionPoliciesWindowsInformationProtectionPolicyIdAssignmentsCountRoute,
  getDeviceAppManagementWindowsInformationProtectionPoliciesWindowsInformationProtectionPolicyIdAssignmentsRoute,
  getDeviceAppManagementWindowsInformationProtectionPoliciesWindowsInformationProtectionPolicyIdAssignmentsTargetedManagedAppPolicyAssignmentIdRoute,
  getDeviceAppManagementWindowsInformationProtectionPoliciesWindowsInformationProtectionPolicyIdExemptAppLockerFilesCountRoute,
  getDeviceAppManagementWindowsInformationProtectionPoliciesWindowsInformationProtectionPolicyIdExemptAppLockerFilesRoute,
  getDeviceAppManagementWindowsInformationProtectionPoliciesWindowsInformationProtectionPolicyIdExemptAppLockerFilesWindowsInformationProtectionAppLockerFileIdRoute,
  getDeviceAppManagementWindowsInformationProtectionPoliciesWindowsInformationProtectionPolicyIdProtectedAppLockerFilesCountRoute,
  getDeviceAppManagementWindowsInformationProtectionPoliciesWindowsInformationProtectionPolicyIdProtectedAppLockerFilesRoute,
  getDeviceAppManagementWindowsInformationProtectionPoliciesWindowsInformationProtectionPolicyIdProtectedAppLockerFilesWindowsInformationProtectionAppLockerFileIdRoute,
  getDeviceAppManagementWindowsInformationProtectionPoliciesWindowsInformationProtectionPolicyIdRoute,
  patchDeviceAppManagementWindowsInformationProtectionPoliciesWindowsInformationProtectionPolicyIdAssignmentsTargetedManagedAppPolicyAssignmentIdRoute,
  patchDeviceAppManagementWindowsInformationProtectionPoliciesWindowsInformationProtectionPolicyIdExemptAppLockerFilesWindowsInformationProtectionAppLockerFileIdRoute,
  patchDeviceAppManagementWindowsInformationProtectionPoliciesWindowsInformationProtectionPolicyIdProtectedAppLockerFilesWindowsInformationProtectionAppLockerFileIdRoute,
  patchDeviceAppManagementWindowsInformationProtectionPoliciesWindowsInformationProtectionPolicyIdRoute,
  postDeviceAppManagementWindowsInformationProtectionPoliciesRoute,
  postDeviceAppManagementWindowsInformationProtectionPoliciesWindowsInformationProtectionPolicyIdAssignmentsRoute,
  postDeviceAppManagementWindowsInformationProtectionPoliciesWindowsInformationProtectionPolicyIdExemptAppLockerFilesRoute,
  postDeviceAppManagementWindowsInformationProtectionPoliciesWindowsInformationProtectionPolicyIdProtectedAppLockerFilesRoute,
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
  .openapi(
    deleteDeviceAppManagementWindowsInformationProtectionPoliciesWindowsInformationProtectionPolicyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementWindowsInformationProtectionPoliciesWindowsInformationProtectionPolicyIdAssignmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceAppManagementWindowsInformationProtectionPoliciesWindowsInformationProtectionPolicyIdAssignmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementWindowsInformationProtectionPoliciesWindowsInformationProtectionPolicyIdAssignmentsTargetedManagedAppPolicyAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceAppManagementWindowsInformationProtectionPoliciesWindowsInformationProtectionPolicyIdAssignmentsTargetedManagedAppPolicyAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceAppManagementWindowsInformationProtectionPoliciesWindowsInformationProtectionPolicyIdAssignmentsTargetedManagedAppPolicyAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementWindowsInformationProtectionPoliciesWindowsInformationProtectionPolicyIdAssignmentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementWindowsInformationProtectionPoliciesWindowsInformationProtectionPolicyIdExemptAppLockerFilesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceAppManagementWindowsInformationProtectionPoliciesWindowsInformationProtectionPolicyIdExemptAppLockerFilesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementWindowsInformationProtectionPoliciesWindowsInformationProtectionPolicyIdExemptAppLockerFilesWindowsInformationProtectionAppLockerFileIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceAppManagementWindowsInformationProtectionPoliciesWindowsInformationProtectionPolicyIdExemptAppLockerFilesWindowsInformationProtectionAppLockerFileIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceAppManagementWindowsInformationProtectionPoliciesWindowsInformationProtectionPolicyIdExemptAppLockerFilesWindowsInformationProtectionAppLockerFileIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementWindowsInformationProtectionPoliciesWindowsInformationProtectionPolicyIdExemptAppLockerFilesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementWindowsInformationProtectionPoliciesWindowsInformationProtectionPolicyIdProtectedAppLockerFilesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceAppManagementWindowsInformationProtectionPoliciesWindowsInformationProtectionPolicyIdProtectedAppLockerFilesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementWindowsInformationProtectionPoliciesWindowsInformationProtectionPolicyIdProtectedAppLockerFilesWindowsInformationProtectionAppLockerFileIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceAppManagementWindowsInformationProtectionPoliciesWindowsInformationProtectionPolicyIdProtectedAppLockerFilesWindowsInformationProtectionAppLockerFileIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceAppManagementWindowsInformationProtectionPoliciesWindowsInformationProtectionPolicyIdProtectedAppLockerFilesWindowsInformationProtectionAppLockerFileIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementWindowsInformationProtectionPoliciesWindowsInformationProtectionPolicyIdProtectedAppLockerFilesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceAppManagementWindowsInformationProtectionPoliciesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
