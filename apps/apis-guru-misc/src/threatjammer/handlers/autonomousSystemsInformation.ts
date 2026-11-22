import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1AsnIpIpAddressRoute,
  getV1AsnNumberPrefixesRoute,
  getV1AsnNumberRoute,
  getV1AsnRegistryAllRoute,
  getV1AsnRegistryCodeRoute,
  getV1AsnStatusAllRoute,
  getV1AsnStatusCodeRoute,
  postV1AsnPrefixRoute,
} from '../routes'

const app = new OpenAPIHono()

export const autonomousSystemsInformationHandler = app
  .openapi(getV1AsnIpIpAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AsnPrefixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AsnRegistryAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AsnRegistryCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AsnStatusAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AsnStatusCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AsnNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AsnNumberPrefixesRoute, (c) => {
    throw new Error('Not implemented')
  })
