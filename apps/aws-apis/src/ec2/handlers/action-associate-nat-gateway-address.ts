import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAssociateNatGatewayAddressRoute,
  postActionAssociateNatGatewayAddressRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionAssociateNatGatewayAddressHandler = app
  .openapi(getActionAssociateNatGatewayAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAssociateNatGatewayAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
