import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDevicesDeviceIdRegisteredOwnersDirectoryObjectIdRefRoute,
  getDevicesDeviceIdMemberOfDirectoryObjectIdRoute,
  getDevicesDeviceIdMemberOfRoute,
  getDevicesDeviceIdRegisteredOwnersRefRoute,
  getDevicesDeviceIdRegisteredOwnersRoute,
  getDevicesDeviceIdRegisteredUsersDirectoryObjectIdRoute,
  getDevicesDeviceIdRegisteredUsersRoute,
  getDevicesDeviceIdTransitiveMemberOfDirectoryObjectIdRoute,
  getDevicesDeviceIdTransitiveMemberOfRoute,
  postDevicesDeviceIdRegisteredOwnersRefRoute,
} from '../routes'

const app = new OpenAPIHono()

export const devicesDirectoryObjectHandler = app
  .openapi(getDevicesDeviceIdMemberOfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdMemberOfDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdRegisteredOwnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdRegisteredOwnersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesDeviceIdRegisteredOwnersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDevicesDeviceIdRegisteredOwnersDirectoryObjectIdRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdRegisteredUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdRegisteredUsersDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdTransitiveMemberOfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdTransitiveMemberOfDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
