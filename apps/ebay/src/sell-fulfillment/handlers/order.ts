import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOrderOrderIdRoute,
  getOrderOrderIdShippingFulfillmentFulfillmentIdRoute,
  getOrderOrderIdShippingFulfillmentRoute,
  getOrderRoute,
  postOrderOrderIdIssueRefundRoute,
  postOrderOrderIdShippingFulfillmentRoute,
} from '../routes'

export const getOrderRouteHandler: RouteHandler<typeof getOrderRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrderOrderIdRouteHandler: RouteHandler<typeof getOrderOrderIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrderOrderIdShippingFulfillmentRouteHandler: RouteHandler<
  typeof getOrderOrderIdShippingFulfillmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrderOrderIdShippingFulfillmentRouteHandler: RouteHandler<
  typeof postOrderOrderIdShippingFulfillmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrderOrderIdShippingFulfillmentFulfillmentIdRouteHandler: RouteHandler<
  typeof getOrderOrderIdShippingFulfillmentFulfillmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrderOrderIdIssueRefundRouteHandler: RouteHandler<
  typeof postOrderOrderIdIssueRefundRoute
> = async (c) => {
  throw new Error('Not implemented')
}
