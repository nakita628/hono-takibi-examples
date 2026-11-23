import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getX402CreditAccountPaymentsIdRoute,
  getX402CreditAccountPaymentsRoute,
  postX402CreditAccountQuoteRoute,
  postX402CreditAccountRoute,
} from '../routes'

export const postX402CreditAccountRouteHandler: RouteHandler<
  typeof postX402CreditAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getX402CreditAccountPaymentsRouteHandler: RouteHandler<
  typeof getX402CreditAccountPaymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getX402CreditAccountPaymentsIdRouteHandler: RouteHandler<
  typeof getX402CreditAccountPaymentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postX402CreditAccountQuoteRouteHandler: RouteHandler<
  typeof postX402CreditAccountQuoteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
