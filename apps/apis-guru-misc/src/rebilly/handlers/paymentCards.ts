import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPaymentCardsIdRoute,
  getPaymentCardsRoute,
  patchPaymentCardsIdRoute,
  postPaymentCardsIdDeactivationRoute,
  postPaymentCardsRoute,
  putPaymentCardsIdRoute,
} from '../routes'

export const getPaymentCardsRouteHandler: RouteHandler<typeof getPaymentCardsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPaymentCardsRouteHandler: RouteHandler<typeof postPaymentCardsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPaymentCardsIdRouteHandler: RouteHandler<typeof getPaymentCardsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchPaymentCardsIdRouteHandler: RouteHandler<
  typeof patchPaymentCardsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPaymentCardsIdRouteHandler: RouteHandler<typeof putPaymentCardsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postPaymentCardsIdDeactivationRouteHandler: RouteHandler<
  typeof postPaymentCardsIdDeactivationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
