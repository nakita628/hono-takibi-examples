import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAuthTokensTokenIdRoute,
  getAuthTokensRoute,
  getAuthTokensTokenIdRoute,
  postAuthTokensRoute,
  putAuthTokensTokenIdRoute,
} from '../routes'

export const getAuthTokensRouteHandler: RouteHandler<typeof getAuthTokensRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthTokensRouteHandler: RouteHandler<typeof postAuthTokensRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthTokensTokenIdRouteHandler: RouteHandler<
  typeof getAuthTokensTokenIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAuthTokensTokenIdRouteHandler: RouteHandler<
  typeof putAuthTokensTokenIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthTokensTokenIdRouteHandler: RouteHandler<
  typeof deleteAuthTokensTokenIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
