import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCreateAuthorIfNotExistsForRoute,
  postCreateAuthorIfNotExistsForRoute,
} from '../routes'

export const getCreateAuthorIfNotExistsForRouteHandler: RouteHandler<
  typeof getCreateAuthorIfNotExistsForRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCreateAuthorIfNotExistsForRouteHandler: RouteHandler<
  typeof postCreateAuthorIfNotExistsForRoute
> = async (c) => {
  throw new Error('Not implemented')
}
