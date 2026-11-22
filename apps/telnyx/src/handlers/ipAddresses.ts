import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccessIpAddressAccessIpAddressIdRoute,
  getAccessIpAddressAccessIpAddressIdRoute,
  getAccessIpAddressRoute,
  postAccessIpAddressRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ipAddressesHandler = app
  .openapi(getAccessIpAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccessIpAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccessIpAddressAccessIpAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccessIpAddressAccessIpAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
