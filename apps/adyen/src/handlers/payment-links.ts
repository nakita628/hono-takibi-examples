import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPaymentLinksLinkIdRoute,
  patchPaymentLinksLinkIdRoute,
  postPaymentLinksRoute,
} from '../routes'

export const postPaymentLinksRouteHandler: RouteHandler<typeof postPaymentLinksRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPaymentLinksLinkIdRouteHandler: RouteHandler<
  typeof getPaymentLinksLinkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPaymentLinksLinkIdRouteHandler: RouteHandler<
  typeof patchPaymentLinksLinkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
