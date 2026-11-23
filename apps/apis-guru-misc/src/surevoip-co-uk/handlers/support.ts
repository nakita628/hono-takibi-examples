import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSupportIpAddressRoute,
  getSupportServiceStatusRoute,
  postSupportEchoRoute,
} from '../routes'

const app = new OpenAPIHono()

export const supportHandler = app
  .openapi(postSupportEchoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSupportIpAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSupportServiceStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
