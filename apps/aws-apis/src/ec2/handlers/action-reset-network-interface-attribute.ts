import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionResetNetworkInterfaceAttributeRoute,
  postActionResetNetworkInterfaceAttributeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionResetNetworkInterfaceAttributeHandler = app
  .openapi(getActionResetNetworkInterfaceAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionResetNetworkInterfaceAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
