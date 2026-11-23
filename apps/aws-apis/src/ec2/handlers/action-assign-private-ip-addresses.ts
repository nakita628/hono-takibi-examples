import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAssignPrivateIpAddressesRoute,
  postActionAssignPrivateIpAddressesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionAssignPrivateIpAddressesHandler = app
  .openapi(getActionAssignPrivateIpAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAssignPrivateIpAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
