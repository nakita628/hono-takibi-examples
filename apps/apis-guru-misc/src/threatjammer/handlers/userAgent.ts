import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1UaDeviceCodeRoute,
  getV1UaFamilyCodeRoute,
  getV1UaOsCodeRoute,
  getV1UaTypeCodeRoute,
  getV1UaUserAgentUrlencodedRoute,
  getV1UaVendorCodeRoute,
  postV1UaCsvRoute,
  postV1UaRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userAgentHandler = app
  .openapi(postV1UaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UaCsvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UaDeviceCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UaFamilyCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UaOsCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UaTypeCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UaVendorCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UaUserAgentUrlencodedRoute, (c) => {
    throw new Error('Not implemented')
  })
