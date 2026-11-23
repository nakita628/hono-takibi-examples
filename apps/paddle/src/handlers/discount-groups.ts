import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDiscountGroupsDiscountGroupIdRoute,
  getDiscountGroupsRoute,
  patchDiscountGroupsDiscountGroupIdRoute,
  postDiscountGroupsRoute,
} from '../routes'

export const getDiscountGroupsRouteHandler: RouteHandler<typeof getDiscountGroupsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postDiscountGroupsRouteHandler: RouteHandler<typeof postDiscountGroupsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getDiscountGroupsDiscountGroupIdRouteHandler: RouteHandler<
  typeof getDiscountGroupsDiscountGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDiscountGroupsDiscountGroupIdRouteHandler: RouteHandler<
  typeof patchDiscountGroupsDiscountGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
