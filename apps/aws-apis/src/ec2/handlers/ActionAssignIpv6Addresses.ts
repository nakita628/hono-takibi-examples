import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionAssignIpv6AddressesRoute, postActionAssignIpv6AddressesRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionAssignIpv6AddressesHandler = app
  .openapi(getActionAssignIpv6AddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAssignIpv6AddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
