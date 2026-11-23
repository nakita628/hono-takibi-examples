import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAssociateClientVpnTargetNetworkRoute,
  postActionAssociateClientVpnTargetNetworkRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionAssociateClientVpnTargetNetworkHandler = app
  .openapi(getActionAssociateClientVpnTargetNetworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAssociateClientVpnTargetNetworkRoute, (c) => {
    throw new Error('Not implemented')
  })
