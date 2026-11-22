import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionUnassignPrivateIpAddressesRoute,
  postActionUnassignPrivateIpAddressesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionUnassignPrivateIpAddressesHandler = app
  .openapi(getActionUnassignPrivateIpAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUnassignPrivateIpAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
