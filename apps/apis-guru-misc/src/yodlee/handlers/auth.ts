import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAuthApiKeyKeyRoute,
  deleteAuthTokenRoute,
  getAuthApiKeyRoute,
  postAuthApiKeyRoute,
  postAuthTokenRoute,
} from '../routes'

export const getAuthApiKeyRouteHandler: RouteHandler<typeof getAuthApiKeyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthApiKeyRouteHandler: RouteHandler<typeof postAuthApiKeyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthApiKeyKeyRouteHandler: RouteHandler<
  typeof deleteAuthApiKeyKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthTokenRouteHandler: RouteHandler<typeof deleteAuthTokenRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthTokenRouteHandler: RouteHandler<typeof postAuthTokenRoute> = async (c) => {
  throw new Error('Not implemented')
}
