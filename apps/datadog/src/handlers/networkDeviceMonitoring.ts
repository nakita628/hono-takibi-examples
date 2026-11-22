import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2NdmDevicesDeviceIdRoute,
  getApiV2NdmDevicesRoute,
  getApiV2NdmInterfacesRoute,
  getApiV2NdmTagsDevicesDeviceIdRoute,
  getApiV2NdmTagsInterfacesInterfaceIdRoute,
  patchApiV2NdmTagsDevicesDeviceIdRoute,
  patchApiV2NdmTagsInterfacesInterfaceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const networkDeviceMonitoringHandler = app
  .openapi(getApiV2NdmDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2NdmDevicesDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2NdmInterfacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2NdmTagsDevicesDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2NdmTagsDevicesDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2NdmTagsInterfacesInterfaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2NdmTagsInterfacesInterfaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
