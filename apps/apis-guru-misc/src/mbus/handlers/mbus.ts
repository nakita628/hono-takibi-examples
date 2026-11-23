import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMbusApiRoute,
  getMbusHatRoute,
  postMbusGetDeviceBaudrateAddressRoute,
  postMbusGetMultiDeviceBaudrateAddressMaxframesRoute,
  postMbusHatOffRoute,
  postMbusHatOnRoute,
  postMbusScanDeviceBaudrateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mbusHandler = app
  .openapi(getMbusApiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMbusGetDeviceBaudrateAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMbusGetMultiDeviceBaudrateAddressMaxframesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMbusHatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMbusHatOffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMbusHatOnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMbusScanDeviceBaudrateRoute, (c) => {
    throw new Error('Not implemented')
  })
