import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDisassociateNatGatewayAddressRoute,
  postActionDisassociateNatGatewayAddressRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDisassociateNatGatewayAddressHandler = app
  .openapi(getActionDisassociateNatGatewayAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDisassociateNatGatewayAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
