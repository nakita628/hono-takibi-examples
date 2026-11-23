import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postEstimatesCreateInvoiceForItemsRoute,
  postEstimatesCreateSubscriptionForItemsRoute,
  postEstimatesGiftSubscriptionForItemsRoute,
  postEstimatesPaymentSchedulesRoute,
  postEstimatesUpdateSubscriptionForItemsRoute,
} from '../routes'

export const postEstimatesCreateSubscriptionForItemsRouteHandler: RouteHandler<
  typeof postEstimatesCreateSubscriptionForItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEstimatesPaymentSchedulesRouteHandler: RouteHandler<
  typeof postEstimatesPaymentSchedulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEstimatesCreateInvoiceForItemsRouteHandler: RouteHandler<
  typeof postEstimatesCreateInvoiceForItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEstimatesGiftSubscriptionForItemsRouteHandler: RouteHandler<
  typeof postEstimatesGiftSubscriptionForItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEstimatesUpdateSubscriptionForItemsRouteHandler: RouteHandler<
  typeof postEstimatesUpdateSubscriptionForItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
