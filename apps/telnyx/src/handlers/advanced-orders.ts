import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAdvancedOrdersOrderIdRoute,
  getAdvancedOrdersRoute,
  patchAdvancedOrdersAdvancedOrderIdRequirementGroupRoute,
  postAdvancedOrdersRoute,
} from '../routes'

export const getAdvancedOrdersRouteHandler: RouteHandler<typeof getAdvancedOrdersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAdvancedOrdersRouteHandler: RouteHandler<typeof postAdvancedOrdersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchAdvancedOrdersAdvancedOrderIdRequirementGroupRouteHandler: RouteHandler<
  typeof patchAdvancedOrdersAdvancedOrderIdRequirementGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdvancedOrdersOrderIdRouteHandler: RouteHandler<
  typeof getAdvancedOrdersOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
