import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIpsWarmupIpAddressRoute,
  getIpsWarmupIpAddressRoute,
  getIpsWarmupRoute,
  postIpsWarmupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ipWarmupHandler = app
  .openapi(getIpsWarmupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpsWarmupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpsWarmupIpAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpsWarmupIpAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
