import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteReverseDnsElasticIpIdRoute,
  deleteReverseDnsInstanceIdRoute,
  getReverseDnsElasticIpIdRoute,
  getReverseDnsInstanceIdRoute,
  postReverseDnsElasticIpIdRoute,
  postReverseDnsInstanceIdRoute,
} from '../routes'

export const getReverseDnsElasticIpIdRouteHandler: RouteHandler<
  typeof getReverseDnsElasticIpIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReverseDnsElasticIpIdRouteHandler: RouteHandler<
  typeof postReverseDnsElasticIpIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReverseDnsElasticIpIdRouteHandler: RouteHandler<
  typeof deleteReverseDnsElasticIpIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReverseDnsInstanceIdRouteHandler: RouteHandler<
  typeof postReverseDnsInstanceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReverseDnsInstanceIdRouteHandler: RouteHandler<
  typeof getReverseDnsInstanceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReverseDnsInstanceIdRouteHandler: RouteHandler<
  typeof deleteReverseDnsInstanceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
