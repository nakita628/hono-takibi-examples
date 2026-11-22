import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getIpsAssignedRoute,
  getIpsIpAddressRoute,
  getIpsRemainingRoute,
  getIpsRoute,
  postIpsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ipAddressesHandler = app
  .openapi(getIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpsAssignedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpsRemainingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpsIpAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
