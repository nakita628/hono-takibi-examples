import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getQuoteVersionsLagoIdRoute,
  postQuoteVersionsLagoIdApproveRoute,
  postQuoteVersionsLagoIdCloneRoute,
  postQuoteVersionsLagoIdVoidRoute,
} from '../routes'

export const getQuoteVersionsLagoIdRouteHandler: RouteHandler<
  typeof getQuoteVersionsLagoIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postQuoteVersionsLagoIdApproveRouteHandler: RouteHandler<
  typeof postQuoteVersionsLagoIdApproveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postQuoteVersionsLagoIdVoidRouteHandler: RouteHandler<
  typeof postQuoteVersionsLagoIdVoidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postQuoteVersionsLagoIdCloneRouteHandler: RouteHandler<
  typeof postQuoteVersionsLagoIdCloneRoute
> = async (c) => {
  throw new Error('Not implemented')
}
