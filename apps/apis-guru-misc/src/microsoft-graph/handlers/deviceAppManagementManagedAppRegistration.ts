import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceAppManagementManagedAppRegistrationsManagedAppRegistrationIdAppliedPoliciesManagedAppPolicyIdRoute,
  deleteDeviceAppManagementManagedAppRegistrationsManagedAppRegistrationIdIntendedPoliciesManagedAppPolicyIdRoute,
  deleteDeviceAppManagementManagedAppRegistrationsManagedAppRegistrationIdOperationsManagedAppOperationIdRoute,
  deleteDeviceAppManagementManagedAppRegistrationsManagedAppRegistrationIdRoute,
  getDeviceAppManagementManagedAppRegistrationsManagedAppRegistrationIdAppliedPoliciesManagedAppPolicyIdRoute,
  getDeviceAppManagementManagedAppRegistrationsManagedAppRegistrationIdAppliedPoliciesRoute,
  getDeviceAppManagementManagedAppRegistrationsManagedAppRegistrationIdIntendedPoliciesManagedAppPolicyIdRoute,
  getDeviceAppManagementManagedAppRegistrationsManagedAppRegistrationIdIntendedPoliciesRoute,
  getDeviceAppManagementManagedAppRegistrationsManagedAppRegistrationIdOperationsManagedAppOperationIdRoute,
  getDeviceAppManagementManagedAppRegistrationsManagedAppRegistrationIdOperationsRoute,
  getDeviceAppManagementManagedAppRegistrationsManagedAppRegistrationIdRoute,
  getDeviceAppManagementManagedAppRegistrationsRoute,
  patchDeviceAppManagementManagedAppRegistrationsManagedAppRegistrationIdAppliedPoliciesManagedAppPolicyIdRoute,
  patchDeviceAppManagementManagedAppRegistrationsManagedAppRegistrationIdIntendedPoliciesManagedAppPolicyIdRoute,
  patchDeviceAppManagementManagedAppRegistrationsManagedAppRegistrationIdOperationsManagedAppOperationIdRoute,
  patchDeviceAppManagementManagedAppRegistrationsManagedAppRegistrationIdRoute,
  postDeviceAppManagementManagedAppRegistrationsManagedAppRegistrationIdAppliedPoliciesRoute,
  postDeviceAppManagementManagedAppRegistrationsManagedAppRegistrationIdIntendedPoliciesRoute,
  postDeviceAppManagementManagedAppRegistrationsManagedAppRegistrationIdOperationsRoute,
  postDeviceAppManagementManagedAppRegistrationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceAppManagementManagedAppRegistrationHandler = app
  .openapi(getDeviceAppManagementManagedAppRegistrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceAppManagementManagedAppRegistrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDeviceAppManagementManagedAppRegistrationsManagedAppRegistrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceAppManagementManagedAppRegistrationsManagedAppRegistrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeviceAppManagementManagedAppRegistrationsManagedAppRegistrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceAppManagementManagedAppRegistrationsManagedAppRegistrationIdAppliedPoliciesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceAppManagementManagedAppRegistrationsManagedAppRegistrationIdAppliedPoliciesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceAppManagementManagedAppRegistrationsManagedAppRegistrationIdAppliedPoliciesManagedAppPolicyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementManagedAppRegistrationsManagedAppRegistrationIdAppliedPoliciesManagedAppPolicyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceAppManagementManagedAppRegistrationsManagedAppRegistrationIdAppliedPoliciesManagedAppPolicyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementManagedAppRegistrationsManagedAppRegistrationIdIntendedPoliciesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceAppManagementManagedAppRegistrationsManagedAppRegistrationIdIntendedPoliciesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceAppManagementManagedAppRegistrationsManagedAppRegistrationIdIntendedPoliciesManagedAppPolicyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementManagedAppRegistrationsManagedAppRegistrationIdIntendedPoliciesManagedAppPolicyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceAppManagementManagedAppRegistrationsManagedAppRegistrationIdIntendedPoliciesManagedAppPolicyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementManagedAppRegistrationsManagedAppRegistrationIdOperationsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceAppManagementManagedAppRegistrationsManagedAppRegistrationIdOperationsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceAppManagementManagedAppRegistrationsManagedAppRegistrationIdOperationsManagedAppOperationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementManagedAppRegistrationsManagedAppRegistrationIdOperationsManagedAppOperationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceAppManagementManagedAppRegistrationsManagedAppRegistrationIdOperationsManagedAppOperationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
