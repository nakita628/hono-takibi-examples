import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV2LoadBalancersLbIdCacheRoute,
  deleteV2LoadBalancersLbIdDropletsRoute,
  deleteV2LoadBalancersLbIdForwardingRulesRoute,
  deleteV2LoadBalancersLbIdRoute,
  getV2LoadBalancersLbIdRoute,
  getV2LoadBalancersRoute,
  postV2LoadBalancersLbIdDropletsRoute,
  postV2LoadBalancersLbIdForwardingRulesRoute,
  postV2LoadBalancersRoute,
  putV2LoadBalancersLbIdRoute,
} from '../routes'

export const postV2LoadBalancersRouteHandler: RouteHandler<
  typeof postV2LoadBalancersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2LoadBalancersRouteHandler: RouteHandler<typeof getV2LoadBalancersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2LoadBalancersLbIdRouteHandler: RouteHandler<
  typeof getV2LoadBalancersLbIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2LoadBalancersLbIdRouteHandler: RouteHandler<
  typeof putV2LoadBalancersLbIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2LoadBalancersLbIdRouteHandler: RouteHandler<
  typeof deleteV2LoadBalancersLbIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2LoadBalancersLbIdCacheRouteHandler: RouteHandler<
  typeof deleteV2LoadBalancersLbIdCacheRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2LoadBalancersLbIdDropletsRouteHandler: RouteHandler<
  typeof postV2LoadBalancersLbIdDropletsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2LoadBalancersLbIdDropletsRouteHandler: RouteHandler<
  typeof deleteV2LoadBalancersLbIdDropletsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2LoadBalancersLbIdForwardingRulesRouteHandler: RouteHandler<
  typeof postV2LoadBalancersLbIdForwardingRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2LoadBalancersLbIdForwardingRulesRouteHandler: RouteHandler<
  typeof deleteV2LoadBalancersLbIdForwardingRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
