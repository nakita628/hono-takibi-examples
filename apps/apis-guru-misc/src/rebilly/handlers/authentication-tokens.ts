import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAuthenticationTokensTokenRoute,
  getAuthenticationTokensRoute,
  getAuthenticationTokensTokenRoute,
  postAuthenticationTokensRoute,
  postAuthenticationTokensTokenExchangeRoute,
} from '../routes'

export const getAuthenticationTokensRouteHandler: RouteHandler<
  typeof getAuthenticationTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthenticationTokensRouteHandler: RouteHandler<
  typeof postAuthenticationTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthenticationTokensTokenRouteHandler: RouteHandler<
  typeof deleteAuthenticationTokensTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthenticationTokensTokenRouteHandler: RouteHandler<
  typeof getAuthenticationTokensTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthenticationTokensTokenExchangeRouteHandler: RouteHandler<
  typeof postAuthenticationTokensTokenExchangeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
