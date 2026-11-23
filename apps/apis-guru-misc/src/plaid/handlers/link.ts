import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postLinkOauthCorrelationIdExchangeRoute,
  postLinkTokenCreateRoute,
  postLinkTokenGetRoute,
} from '../routes'

export const postLinkOauthCorrelationIdExchangeRouteHandler: RouteHandler<
  typeof postLinkOauthCorrelationIdExchangeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postLinkTokenCreateRouteHandler: RouteHandler<
  typeof postLinkTokenCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postLinkTokenGetRouteHandler: RouteHandler<typeof postLinkTokenGetRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
