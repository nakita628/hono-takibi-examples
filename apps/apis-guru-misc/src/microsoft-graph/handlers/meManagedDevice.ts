import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeManagedDevicesManagedDeviceIdDeviceCategoryRoute,
  deleteMeManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesDeviceCompliancePolicyStateIdRoute,
  deleteMeManagedDevicesManagedDeviceIdDeviceConfigurationStatesDeviceConfigurationStateIdRoute,
  deleteMeManagedDevicesManagedDeviceIdRoute,
  getMeManagedDevicesManagedDeviceIdDeviceCategoryRoute,
  getMeManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesDeviceCompliancePolicyStateIdRoute,
  getMeManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesRoute,
  getMeManagedDevicesManagedDeviceIdDeviceConfigurationStatesDeviceConfigurationStateIdRoute,
  getMeManagedDevicesManagedDeviceIdDeviceConfigurationStatesRoute,
  getMeManagedDevicesManagedDeviceIdRoute,
  getMeManagedDevicesManagedDeviceIdUsersRoute,
  getMeManagedDevicesRoute,
  patchMeManagedDevicesManagedDeviceIdDeviceCategoryRoute,
  patchMeManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesDeviceCompliancePolicyStateIdRoute,
  patchMeManagedDevicesManagedDeviceIdDeviceConfigurationStatesDeviceConfigurationStateIdRoute,
  patchMeManagedDevicesManagedDeviceIdRoute,
  postMeManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesRoute,
  postMeManagedDevicesManagedDeviceIdDeviceConfigurationStatesRoute,
  postMeManagedDevicesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meManagedDeviceHandler = app
  .openapi(getMeManagedDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeManagedDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeManagedDevicesManagedDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeManagedDevicesManagedDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeManagedDevicesManagedDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeManagedDevicesManagedDeviceIdDeviceCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeManagedDevicesManagedDeviceIdDeviceCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeManagedDevicesManagedDeviceIdDeviceCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMeManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesDeviceCompliancePolicyStateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesDeviceCompliancePolicyStateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesDeviceCompliancePolicyStateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeManagedDevicesManagedDeviceIdDeviceConfigurationStatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeManagedDevicesManagedDeviceIdDeviceConfigurationStatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMeManagedDevicesManagedDeviceIdDeviceConfigurationStatesDeviceConfigurationStateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeManagedDevicesManagedDeviceIdDeviceConfigurationStatesDeviceConfigurationStateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeManagedDevicesManagedDeviceIdDeviceConfigurationStatesDeviceConfigurationStateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeManagedDevicesManagedDeviceIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
