import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getIpAddressRoute,
  getServiceStatusRoute,
  getSupportIpAddressRoute,
  getSupportServiceStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const supportHandler = app
  .openapi(getIpAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServiceStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSupportIpAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSupportServiceStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
