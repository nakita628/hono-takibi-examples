import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMbusApiRoute,
  getMbusHatRoute,
  postMbusGetDeviceBaudrateAddressRoute,
  postMbusGetMultiDeviceBaudrateAddressMaxframesRoute,
  postMbusHatOffRoute,
  postMbusHatOnRoute,
  postMbusScanDeviceBaudrateRoute,
} from './routes'
import {
  getMbusApiRouteHandler,
  getMbusHatRouteHandler,
  postMbusGetDeviceBaudrateAddressRouteHandler,
  postMbusGetMultiDeviceBaudrateAddressMaxframesRouteHandler,
  postMbusHatOffRouteHandler,
  postMbusHatOnRouteHandler,
  postMbusScanDeviceBaudrateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getMbusApiRoute, getMbusApiRouteHandler)
  .openapi(postMbusGetDeviceBaudrateAddressRoute, postMbusGetDeviceBaudrateAddressRouteHandler)
  .openapi(
    postMbusGetMultiDeviceBaudrateAddressMaxframesRoute,
    postMbusGetMultiDeviceBaudrateAddressMaxframesRouteHandler,
  )
  .openapi(getMbusHatRoute, getMbusHatRouteHandler)
  .openapi(postMbusHatOffRoute, postMbusHatOffRouteHandler)
  .openapi(postMbusHatOnRoute, postMbusHatOnRouteHandler)
  .openapi(postMbusScanDeviceBaudrateRoute, postMbusScanDeviceBaudrateRouteHandler)

export default app
