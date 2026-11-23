import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1PaymentLinksLinkIdRoute,
  getV1PaymentLinksRoute,
  postV1PaymentLinksRoute,
  putV1PaymentLinksLinkIdRoute,
} from '../routes'

export const getV1PaymentLinksRouteHandler: RouteHandler<typeof getV1PaymentLinksRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1PaymentLinksRouteHandler: RouteHandler<typeof postV1PaymentLinksRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1PaymentLinksLinkIdRouteHandler: RouteHandler<
  typeof getV1PaymentLinksLinkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1PaymentLinksLinkIdRouteHandler: RouteHandler<
  typeof putV1PaymentLinksLinkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
