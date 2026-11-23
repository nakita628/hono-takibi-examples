import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionUnassignIpv6AddressesRoute,
  postActionUnassignIpv6AddressesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionUnassignIpv6AddressesHandler = app
  .openapi(getActionUnassignIpv6AddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUnassignIpv6AddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
