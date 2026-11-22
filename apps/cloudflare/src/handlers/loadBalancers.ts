import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdLoadBalancersLoadBalancerIdRoute,
  getZonesZoneIdLoadBalancersLoadBalancerIdRoute,
  getZonesZoneIdLoadBalancersRoute,
  patchZonesZoneIdLoadBalancersLoadBalancerIdRoute,
  postZonesZoneIdLoadBalancersRoute,
  putZonesZoneIdLoadBalancersLoadBalancerIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const loadBalancersHandler = app
  .openapi(getZonesZoneIdLoadBalancersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdLoadBalancersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdLoadBalancersLoadBalancerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdLoadBalancersLoadBalancerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdLoadBalancersLoadBalancerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdLoadBalancersLoadBalancerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
