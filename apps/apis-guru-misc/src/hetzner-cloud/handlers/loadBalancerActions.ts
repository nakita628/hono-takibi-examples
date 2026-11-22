import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getLoadBalancersIdActionsActionIdRoute,
  getLoadBalancersIdActionsRoute,
  postLoadBalancersIdActionsAddServiceRoute,
  postLoadBalancersIdActionsAddTargetRoute,
  postLoadBalancersIdActionsAttachToNetworkRoute,
  postLoadBalancersIdActionsChangeAlgorithmRoute,
  postLoadBalancersIdActionsChangeDnsPtrRoute,
  postLoadBalancersIdActionsChangeProtectionRoute,
  postLoadBalancersIdActionsChangeTypeRoute,
  postLoadBalancersIdActionsDeleteServiceRoute,
  postLoadBalancersIdActionsDetachFromNetworkRoute,
  postLoadBalancersIdActionsDisablePublicInterfaceRoute,
  postLoadBalancersIdActionsEnablePublicInterfaceRoute,
  postLoadBalancersIdActionsRemoveTargetRoute,
  postLoadBalancersIdActionsUpdateServiceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const loadBalancerActionsHandler = app
  .openapi(getLoadBalancersIdActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoadBalancersIdActionsAddServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoadBalancersIdActionsAddTargetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoadBalancersIdActionsAttachToNetworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoadBalancersIdActionsChangeAlgorithmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoadBalancersIdActionsChangeDnsPtrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoadBalancersIdActionsChangeProtectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoadBalancersIdActionsChangeTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoadBalancersIdActionsDeleteServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoadBalancersIdActionsDetachFromNetworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoadBalancersIdActionsDisablePublicInterfaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoadBalancersIdActionsEnablePublicInterfaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoadBalancersIdActionsRemoveTargetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoadBalancersIdActionsUpdateServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLoadBalancersIdActionsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
