import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionUnassignPrivateNatGatewayAddressRoute,
  postActionUnassignPrivateNatGatewayAddressRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionUnassignPrivateNatGatewayAddressHandler = app
  .openapi(getActionUnassignPrivateNatGatewayAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUnassignPrivateNatGatewayAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
