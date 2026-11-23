import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPaymentLinkPaymentLinkIdRoute,
  postPaymentLinkListRoute,
  postPaymentLinkProfileListRoute,
} from '../routes'

export const getPaymentLinkPaymentLinkIdRouteHandler: RouteHandler<
  typeof getPaymentLinkPaymentLinkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPaymentLinkListRouteHandler: RouteHandler<
  typeof postPaymentLinkListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPaymentLinkProfileListRouteHandler: RouteHandler<
  typeof postPaymentLinkProfileListRoute
> = async (c) => {
  throw new Error('Not implemented')
}
