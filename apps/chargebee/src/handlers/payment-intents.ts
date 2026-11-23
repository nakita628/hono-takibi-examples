import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPaymentIntentsPaymentIntentIdRoute,
  postPaymentIntentsPaymentIntentIdRoute,
  postPaymentIntentsRoute,
} from '../routes'

export const getPaymentIntentsPaymentIntentIdRouteHandler: RouteHandler<
  typeof getPaymentIntentsPaymentIntentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPaymentIntentsPaymentIntentIdRouteHandler: RouteHandler<
  typeof postPaymentIntentsPaymentIntentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPaymentIntentsRouteHandler: RouteHandler<typeof postPaymentIntentsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
