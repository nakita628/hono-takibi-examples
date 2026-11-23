import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAssignPrivateNatGatewayAddressRoute,
  postActionAssignPrivateNatGatewayAddressRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionAssignPrivateNatGatewayAddressHandler = app
  .openapi(getActionAssignPrivateNatGatewayAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAssignPrivateNatGatewayAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
