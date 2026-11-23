import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteBillingGroupsIdRoute,
  getBillingGroupsIdRoute,
  getBillingGroupsRoute,
  patchBillingGroupsIdRoute,
  postBillingGroupsRoute,
} from '../routes'

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

export const deleteBillingGroupsIdRouteHandler: RouteHandler<
  typeof deleteBillingGroupsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBillingGroupsIdRouteHandler: RouteHandler<typeof getBillingGroupsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchBillingGroupsIdRouteHandler: RouteHandler<
  typeof patchBillingGroupsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
