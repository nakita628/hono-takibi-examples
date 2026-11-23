import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTokensCheckTokenIdTokenNameRoute,
  getTokensListBlockedRoute,
  getTokensListGenuineRoute,
  getTokensPricesAllRoute,
  getTokensPricesTokenIdRoute,
} from '../routes'

export const getTokensCheckTokenIdTokenNameRouteHandler: RouteHandler<
  typeof getTokensCheckTokenIdTokenNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTokensListBlockedRouteHandler: RouteHandler<
  typeof getTokensListBlockedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTokensListGenuineRouteHandler: RouteHandler<
  typeof getTokensListGenuineRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTokensPricesAllRouteHandler: RouteHandler<typeof getTokensPricesAllRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getTokensPricesTokenIdRouteHandler: RouteHandler<
  typeof getTokensPricesTokenIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
