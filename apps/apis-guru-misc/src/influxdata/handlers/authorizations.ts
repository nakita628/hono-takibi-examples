import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAuthorizationsAuthIDRoute,
  getAuthorizationsAuthIDRoute,
  getAuthorizationsRoute,
  patchAuthorizationsAuthIDRoute,
  postAuthorizationsRoute,
} from '../routes'

export const getAuthorizationsRouteHandler: RouteHandler<typeof getAuthorizationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAuthorizationsRouteHandler: RouteHandler<typeof postAuthorizationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteAuthorizationsAuthIDRouteHandler: RouteHandler<
  typeof deleteAuthorizationsAuthIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthorizationsAuthIDRouteHandler: RouteHandler<
  typeof getAuthorizationsAuthIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAuthorizationsAuthIDRouteHandler: RouteHandler<
  typeof patchAuthorizationsAuthIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}
