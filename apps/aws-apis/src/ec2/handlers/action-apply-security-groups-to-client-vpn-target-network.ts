import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionApplySecurityGroupsToClientVpnTargetNetworkRoute,
  postActionApplySecurityGroupsToClientVpnTargetNetworkRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionApplySecurityGroupsToClientVpnTargetNetworkHandler = app
  .openapi(getActionApplySecurityGroupsToClientVpnTargetNetworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionApplySecurityGroupsToClientVpnTargetNetworkRoute, (c) => {
    throw new Error('Not implemented')
  })
