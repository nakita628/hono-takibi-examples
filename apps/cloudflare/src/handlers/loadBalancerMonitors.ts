import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserLoadBalancersMonitorsMonitorIdRoute,
  getUserLoadBalancersMonitorsMonitorIdReferencesRoute,
  getUserLoadBalancersMonitorsMonitorIdRoute,
  getUserLoadBalancersMonitorsRoute,
  getUserLoadBalancersPreviewPreviewIdRoute,
  patchUserLoadBalancersMonitorsMonitorIdRoute,
  postUserLoadBalancersMonitorsMonitorIdPreviewRoute,
  postUserLoadBalancersMonitorsRoute,
  putUserLoadBalancersMonitorsMonitorIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const loadBalancerMonitorsHandler = app
  .openapi(getUserLoadBalancersMonitorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserLoadBalancersMonitorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserLoadBalancersMonitorsMonitorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserLoadBalancersMonitorsMonitorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserLoadBalancersMonitorsMonitorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserLoadBalancersMonitorsMonitorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserLoadBalancersMonitorsMonitorIdPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserLoadBalancersMonitorsMonitorIdReferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserLoadBalancersPreviewPreviewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
