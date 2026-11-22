import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementManagedDevicesManagedDeviceIdDeviceCategoryRoute,
  deleteDeviceManagementManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesDeviceCompliancePolicyStateIdRoute,
  deleteDeviceManagementManagedDevicesManagedDeviceIdDeviceConfigurationStatesDeviceConfigurationStateIdRoute,
  deleteDeviceManagementManagedDevicesManagedDeviceIdRoute,
  getDeviceManagementManagedDevicesManagedDeviceIdDeviceCategoryRoute,
  getDeviceManagementManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesDeviceCompliancePolicyStateIdRoute,
  getDeviceManagementManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesRoute,
  getDeviceManagementManagedDevicesManagedDeviceIdDeviceConfigurationStatesDeviceConfigurationStateIdRoute,
  getDeviceManagementManagedDevicesManagedDeviceIdDeviceConfigurationStatesRoute,
  getDeviceManagementManagedDevicesManagedDeviceIdRoute,
  getDeviceManagementManagedDevicesManagedDeviceIdUsersRoute,
  getDeviceManagementManagedDevicesRoute,
  patchDeviceManagementManagedDevicesManagedDeviceIdDeviceCategoryRoute,
  patchDeviceManagementManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesDeviceCompliancePolicyStateIdRoute,
  patchDeviceManagementManagedDevicesManagedDeviceIdDeviceConfigurationStatesDeviceConfigurationStateIdRoute,
  patchDeviceManagementManagedDevicesManagedDeviceIdRoute,
  postDeviceManagementManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesRoute,
  postDeviceManagementManagedDevicesManagedDeviceIdDeviceConfigurationStatesRoute,
  postDeviceManagementManagedDevicesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementManagedDeviceHandler = app
  .openapi(getDeviceManagementManagedDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementManagedDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDeviceManagementManagedDevicesManagedDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementManagedDevicesManagedDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeviceManagementManagedDevicesManagedDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDeviceManagementManagedDevicesManagedDeviceIdDeviceCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementManagedDevicesManagedDeviceIdDeviceCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeviceManagementManagedDevicesManagedDeviceIdDeviceCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceManagementManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceManagementManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesDeviceCompliancePolicyStateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesDeviceCompliancePolicyStateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesDeviceCompliancePolicyStateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceManagementManagedDevicesManagedDeviceIdDeviceConfigurationStatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementManagedDevicesManagedDeviceIdDeviceConfigurationStatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteDeviceManagementManagedDevicesManagedDeviceIdDeviceConfigurationStatesDeviceConfigurationStateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementManagedDevicesManagedDeviceIdDeviceConfigurationStatesDeviceConfigurationStateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementManagedDevicesManagedDeviceIdDeviceConfigurationStatesDeviceConfigurationStateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceManagementManagedDevicesManagedDeviceIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
