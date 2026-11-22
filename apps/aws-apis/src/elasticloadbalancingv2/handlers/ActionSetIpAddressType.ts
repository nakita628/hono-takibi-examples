import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionSetIpAddressTypeRoute, postActionSetIpAddressTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionSetIpAddressTypeHandler = app
  .openapi(getActionSetIpAddressTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionSetIpAddressTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
