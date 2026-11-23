import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDisassociateClientVpnTargetNetworkRoute,
  postActionDisassociateClientVpnTargetNetworkRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDisassociateClientVpnTargetNetworkHandler = app
  .openapi(getActionDisassociateClientVpnTargetNetworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDisassociateClientVpnTargetNetworkRoute, (c) => {
    throw new Error('Not implemented')
  })
