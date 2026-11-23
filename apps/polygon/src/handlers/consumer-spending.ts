import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getConsumerSpendingEuV1MerchantAggregatesRoute,
  getConsumerSpendingEuV1MerchantHierarchyRoute,
} from '../routes'

export const getConsumerSpendingEuV1MerchantAggregatesRouteHandler: RouteHandler<
  typeof getConsumerSpendingEuV1MerchantAggregatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getConsumerSpendingEuV1MerchantHierarchyRouteHandler: RouteHandler<
  typeof getConsumerSpendingEuV1MerchantHierarchyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
