import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeClientVpnTargetNetworksRoute,
  postActionDescribeClientVpnTargetNetworksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeClientVpnTargetNetworksHandler = app
  .openapi(getActionDescribeClientVpnTargetNetworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeClientVpnTargetNetworksRoute, (c) => {
    throw new Error('Not implemented')
  })
