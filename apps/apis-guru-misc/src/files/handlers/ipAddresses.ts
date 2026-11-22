import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getIpAddressesExavaultReservedRoute,
  getIpAddressesReservedRoute,
  getIpAddressesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ipAddressesHandler = app
  .openapi(getIpAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpAddressesExavaultReservedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpAddressesReservedRoute, (c) => {
    throw new Error('Not implemented')
  })
