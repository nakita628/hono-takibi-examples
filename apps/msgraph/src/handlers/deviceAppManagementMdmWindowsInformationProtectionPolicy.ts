import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceAppManagementMdmWindowsInformationProtectionPoliciesMdmWindowsInformationProtectionPolicyIdAssignmentsTargetedManagedAppPolicyAssignmentIdRoute,
  deleteDeviceAppManagementMdmWindowsInformationProtectionPoliciesMdmWindowsInformationProtectionPolicyIdExemptAppLockerFilesWindowsInformationProtectionAppLockerFileIdRoute,
  deleteDeviceAppManagementMdmWindowsInformationProtectionPoliciesMdmWindowsInformationProtectionPolicyIdProtectedAppLockerFilesWindowsInformationProtectionAppLockerFileIdRoute,
  deleteDeviceAppManagementMdmWindowsInformationProtectionPoliciesMdmWindowsInformationProtectionPolicyIdRoute,
  getDeviceAppManagementMdmWindowsInformationProtectionPoliciesCountRoute,
  getDeviceAppManagementMdmWindowsInformationProtectionPoliciesMdmWindowsInformationProtectionPolicyIdAssignmentsCountRoute,
  getDeviceAppManagementMdmWindowsInformationProtectionPoliciesMdmWindowsInformationProtectionPolicyIdAssignmentsRoute,
  getDeviceAppManagementMdmWindowsInformationProtectionPoliciesMdmWindowsInformationProtectionPolicyIdAssignmentsTargetedManagedAppPolicyAssignmentIdRoute,
  getDeviceAppManagementMdmWindowsInformationProtectionPoliciesMdmWindowsInformationProtectionPolicyIdExemptAppLockerFilesCountRoute,
  getDeviceAppManagementMdmWindowsInformationProtectionPoliciesMdmWindowsInformationProtectionPolicyIdExemptAppLockerFilesRoute,
  getDeviceAppManagementMdmWindowsInformationProtectionPoliciesMdmWindowsInformationProtectionPolicyIdExemptAppLockerFilesWindowsInformationProtectionAppLockerFileIdRoute,
  getDeviceAppManagementMdmWindowsInformationProtectionPoliciesMdmWindowsInformationProtectionPolicyIdProtectedAppLockerFilesCountRoute,
  getDeviceAppManagementMdmWindowsInformationProtectionPoliciesMdmWindowsInformationProtectionPolicyIdProtectedAppLockerFilesRoute,
  getDeviceAppManagementMdmWindowsInformationProtectionPoliciesMdmWindowsInformationProtectionPolicyIdProtectedAppLockerFilesWindowsInformationProtectionAppLockerFileIdRoute,
  getDeviceAppManagementMdmWindowsInformationProtectionPoliciesMdmWindowsInformationProtectionPolicyIdRoute,
  getDeviceAppManagementMdmWindowsInformationProtectionPoliciesRoute,
  patchDeviceAppManagementMdmWindowsInformationProtectionPoliciesMdmWindowsInformationProtectionPolicyIdAssignmentsTargetedManagedAppPolicyAssignmentIdRoute,
  patchDeviceAppManagementMdmWindowsInformationProtectionPoliciesMdmWindowsInformationProtectionPolicyIdExemptAppLockerFilesWindowsInformationProtectionAppLockerFileIdRoute,
  patchDeviceAppManagementMdmWindowsInformationProtectionPoliciesMdmWindowsInformationProtectionPolicyIdProtectedAppLockerFilesWindowsInformationProtectionAppLockerFileIdRoute,
  patchDeviceAppManagementMdmWindowsInformationProtectionPoliciesMdmWindowsInformationProtectionPolicyIdRoute,
  postDeviceAppManagementMdmWindowsInformationProtectionPoliciesMdmWindowsInformationProtectionPolicyIdAssignmentsRoute,
  postDeviceAppManagementMdmWindowsInformationProtectionPoliciesMdmWindowsInformationProtectionPolicyIdExemptAppLockerFilesRoute,
  postDeviceAppManagementMdmWindowsInformationProtectionPoliciesMdmWindowsInformationProtectionPolicyIdProtectedAppLockerFilesRoute,
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
  .openapi(
    deleteDeviceAppManagementMdmWindowsInformationProtectionPoliciesMdmWindowsInformationProtectionPolicyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementMdmWindowsInformationProtectionPoliciesMdmWindowsInformationProtectionPolicyIdAssignmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceAppManagementMdmWindowsInformationProtectionPoliciesMdmWindowsInformationProtectionPolicyIdAssignmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementMdmWindowsInformationProtectionPoliciesMdmWindowsInformationProtectionPolicyIdAssignmentsTargetedManagedAppPolicyAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceAppManagementMdmWindowsInformationProtectionPoliciesMdmWindowsInformationProtectionPolicyIdAssignmentsTargetedManagedAppPolicyAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceAppManagementMdmWindowsInformationProtectionPoliciesMdmWindowsInformationProtectionPolicyIdAssignmentsTargetedManagedAppPolicyAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementMdmWindowsInformationProtectionPoliciesMdmWindowsInformationProtectionPolicyIdAssignmentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementMdmWindowsInformationProtectionPoliciesMdmWindowsInformationProtectionPolicyIdExemptAppLockerFilesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceAppManagementMdmWindowsInformationProtectionPoliciesMdmWindowsInformationProtectionPolicyIdExemptAppLockerFilesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementMdmWindowsInformationProtectionPoliciesMdmWindowsInformationProtectionPolicyIdExemptAppLockerFilesWindowsInformationProtectionAppLockerFileIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceAppManagementMdmWindowsInformationProtectionPoliciesMdmWindowsInformationProtectionPolicyIdExemptAppLockerFilesWindowsInformationProtectionAppLockerFileIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceAppManagementMdmWindowsInformationProtectionPoliciesMdmWindowsInformationProtectionPolicyIdExemptAppLockerFilesWindowsInformationProtectionAppLockerFileIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementMdmWindowsInformationProtectionPoliciesMdmWindowsInformationProtectionPolicyIdExemptAppLockerFilesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementMdmWindowsInformationProtectionPoliciesMdmWindowsInformationProtectionPolicyIdProtectedAppLockerFilesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceAppManagementMdmWindowsInformationProtectionPoliciesMdmWindowsInformationProtectionPolicyIdProtectedAppLockerFilesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementMdmWindowsInformationProtectionPoliciesMdmWindowsInformationProtectionPolicyIdProtectedAppLockerFilesWindowsInformationProtectionAppLockerFileIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceAppManagementMdmWindowsInformationProtectionPoliciesMdmWindowsInformationProtectionPolicyIdProtectedAppLockerFilesWindowsInformationProtectionAppLockerFileIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceAppManagementMdmWindowsInformationProtectionPoliciesMdmWindowsInformationProtectionPolicyIdProtectedAppLockerFilesWindowsInformationProtectionAppLockerFileIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementMdmWindowsInformationProtectionPoliciesMdmWindowsInformationProtectionPolicyIdProtectedAppLockerFilesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceAppManagementMdmWindowsInformationProtectionPoliciesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
