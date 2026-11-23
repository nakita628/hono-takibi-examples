import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAccessTokenTokenPrefixRoute,
  getAccessTokenRoute,
  postAccessTokenRoute,
  putAccessTokenTokenPrefixRoute,
} from '../routes'

export const postAccessTokenRouteHandler: RouteHandler<typeof postAccessTokenRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccessTokenRouteHandler: RouteHandler<typeof getAccessTokenRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccessTokenTokenPrefixRouteHandler: RouteHandler<
  typeof deleteAccessTokenTokenPrefixRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccessTokenTokenPrefixRouteHandler: RouteHandler<
  typeof putAccessTokenTokenPrefixRoute
> = async (c) => {
  throw new Error('Not implemented')
}
