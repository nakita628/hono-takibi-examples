import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNetworkDevicesDeviceIdRoute,
  getNetworkDevicesRoute,
  getNetworkGatewayRoute,
  getNetworkInterfacesRoute,
  getNetworkRoutesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const networkInformationHandler = app
  .openapi(getNetworkDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworkDevicesDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworkGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworkRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworkInterfacesRoute, (c) => {
    throw new Error('Not implemented')
  })
