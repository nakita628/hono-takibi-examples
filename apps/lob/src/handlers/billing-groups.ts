import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getBillingGroupsBgIdRoute,
  getBillingGroupsRoute,
  postBillingGroupsBgIdRoute,
  postBillingGroupsRoute,
} from '../routes'

export const getBillingGroupsBgIdRouteHandler: RouteHandler<
  typeof getBillingGroupsBgIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postBillingGroupsBgIdRouteHandler: RouteHandler<
  typeof postBillingGroupsBgIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBillingGroupsRouteHandler: RouteHandler<typeof getBillingGroupsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postBillingGroupsRouteHandler: RouteHandler<typeof postBillingGroupsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
