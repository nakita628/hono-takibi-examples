import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postDevicesDeviceIdCheckMemberGroupsRoute,
  postDevicesDeviceIdCheckMemberObjectsRoute,
  postDevicesDeviceIdGetMemberGroupsRoute,
  postDevicesDeviceIdGetMemberObjectsRoute,
  postDevicesDeviceIdRestoreRoute,
  postDevicesGetAvailableExtensionPropertiesRoute,
  postDevicesGetByIdsRoute,
  postDevicesProvisionRoute,
  postDevicesValidatePropertiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const devicesDeviceActionsHandler = app
  .openapi(postDevicesDeviceIdCheckMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesDeviceIdCheckMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesDeviceIdGetMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesDeviceIdGetMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesDeviceIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesGetAvailableExtensionPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesGetByIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesProvisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesValidatePropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
