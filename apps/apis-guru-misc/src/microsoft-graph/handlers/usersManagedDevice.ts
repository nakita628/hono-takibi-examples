import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdManagedDevicesManagedDeviceIdDeviceCategoryRoute,
  deleteUsersUserIdManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesDeviceCompliancePolicyStateIdRoute,
  deleteUsersUserIdManagedDevicesManagedDeviceIdDeviceConfigurationStatesDeviceConfigurationStateIdRoute,
  deleteUsersUserIdManagedDevicesManagedDeviceIdRoute,
  getUsersUserIdManagedDevicesManagedDeviceIdDeviceCategoryRoute,
  getUsersUserIdManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesDeviceCompliancePolicyStateIdRoute,
  getUsersUserIdManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesRoute,
  getUsersUserIdManagedDevicesManagedDeviceIdDeviceConfigurationStatesDeviceConfigurationStateIdRoute,
  getUsersUserIdManagedDevicesManagedDeviceIdDeviceConfigurationStatesRoute,
  getUsersUserIdManagedDevicesManagedDeviceIdRoute,
  getUsersUserIdManagedDevicesManagedDeviceIdUsersRoute,
  getUsersUserIdManagedDevicesRoute,
  patchUsersUserIdManagedDevicesManagedDeviceIdDeviceCategoryRoute,
  patchUsersUserIdManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesDeviceCompliancePolicyStateIdRoute,
  patchUsersUserIdManagedDevicesManagedDeviceIdDeviceConfigurationStatesDeviceConfigurationStateIdRoute,
  patchUsersUserIdManagedDevicesManagedDeviceIdRoute,
  postUsersUserIdManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesRoute,
  postUsersUserIdManagedDevicesManagedDeviceIdDeviceConfigurationStatesRoute,
  postUsersUserIdManagedDevicesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersManagedDeviceHandler = app
  .openapi(getUsersUserIdManagedDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdManagedDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdManagedDevicesManagedDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdManagedDevicesManagedDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdManagedDevicesManagedDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdManagedDevicesManagedDeviceIdDeviceCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdManagedDevicesManagedDeviceIdDeviceCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdManagedDevicesManagedDeviceIdDeviceCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesDeviceCompliancePolicyStateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesDeviceCompliancePolicyStateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesDeviceCompliancePolicyStateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdManagedDevicesManagedDeviceIdDeviceConfigurationStatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdManagedDevicesManagedDeviceIdDeviceConfigurationStatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdManagedDevicesManagedDeviceIdDeviceConfigurationStatesDeviceConfigurationStateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdManagedDevicesManagedDeviceIdDeviceConfigurationStatesDeviceConfigurationStateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdManagedDevicesManagedDeviceIdDeviceConfigurationStatesDeviceConfigurationStateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdManagedDevicesManagedDeviceIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
