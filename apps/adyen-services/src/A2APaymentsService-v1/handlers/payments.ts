import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postPaymentsCancelRoute,
  postPaymentsConfirmRoute,
  postPaymentsDetailsRoute,
} from '../routes'

export const postPaymentsCancelRouteHandler: RouteHandler<typeof postPaymentsCancelRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postPaymentsConfirmRouteHandler: RouteHandler<
  typeof postPaymentsConfirmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPaymentsDetailsRouteHandler: RouteHandler<
  typeof postPaymentsDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
