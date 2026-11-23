import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postFulfillmentEndpointPvtOrderFormsSimulationRoute,
  postFulfillmentEndpointPvtOrdersOrderIdCancelRoute,
  postFulfillmentEndpointPvtOrdersRoute,
  postFulfillmentEndpointPvtOrdersSellerOrderIdFulfillRoute,
} from '../routes'

export const postFulfillmentEndpointPvtOrderFormsSimulationRouteHandler: RouteHandler<
  typeof postFulfillmentEndpointPvtOrderFormsSimulationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postFulfillmentEndpointPvtOrdersRouteHandler: RouteHandler<
  typeof postFulfillmentEndpointPvtOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postFulfillmentEndpointPvtOrdersOrderIdCancelRouteHandler: RouteHandler<
  typeof postFulfillmentEndpointPvtOrdersOrderIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postFulfillmentEndpointPvtOrdersSellerOrderIdFulfillRouteHandler: RouteHandler<
  typeof postFulfillmentEndpointPvtOrdersSellerOrderIdFulfillRoute
> = async (c) => {
  throw new Error('Not implemented')
}
