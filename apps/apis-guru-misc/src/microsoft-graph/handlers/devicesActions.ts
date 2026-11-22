import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postDevicesDeviceIdMicrosoftGraphCheckMemberGroupsRoute,
  postDevicesDeviceIdMicrosoftGraphCheckMemberObjectsRoute,
  postDevicesDeviceIdMicrosoftGraphGetMemberGroupsRoute,
  postDevicesDeviceIdMicrosoftGraphGetMemberObjectsRoute,
  postDevicesDeviceIdMicrosoftGraphRestoreRoute,
  postDevicesMicrosoftGraphGetAvailableExtensionPropertiesRoute,
  postDevicesMicrosoftGraphGetByIdsRoute,
  postDevicesMicrosoftGraphValidatePropertiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const devicesActionsHandler = app
  .openapi(postDevicesMicrosoftGraphGetAvailableExtensionPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesMicrosoftGraphGetByIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesMicrosoftGraphValidatePropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesDeviceIdMicrosoftGraphCheckMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesDeviceIdMicrosoftGraphCheckMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesDeviceIdMicrosoftGraphGetMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesDeviceIdMicrosoftGraphGetMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesDeviceIdMicrosoftGraphRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
