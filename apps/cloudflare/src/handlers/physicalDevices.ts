import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdDevicesPhysicalDevicesDeviceIdRoute,
  deleteAccountsAccountIdDevicesRegistrationsRoute,
  getAccountsAccountIdDevicesPhysicalDevicesDeviceIdRoute,
  getAccountsAccountIdDevicesPhysicalDevicesRoute,
  patchAccountsAccountIdDevicesPhysicalDevicesDeviceIdRoute,
  postAccountsAccountIdDevicesPhysicalDevicesDeviceIdRevokeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const physicalDevicesHandler = app
  .openapi(getAccountsAccountIdDevicesPhysicalDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdDevicesPhysicalDevicesDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDevicesPhysicalDevicesDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdDevicesPhysicalDevicesDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDevicesPhysicalDevicesDeviceIdRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdDevicesRegistrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
