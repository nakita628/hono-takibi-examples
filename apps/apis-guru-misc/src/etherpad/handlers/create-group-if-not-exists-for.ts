import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCreateGroupIfNotExistsForRoute,
  postCreateGroupIfNotExistsForRoute,
} from '../routes'

export const getCreateGroupIfNotExistsForRouteHandler: RouteHandler<
  typeof getCreateGroupIfNotExistsForRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCreateGroupIfNotExistsForRouteHandler: RouteHandler<
  typeof postCreateGroupIfNotExistsForRoute
> = async (c) => {
  throw new Error('Not implemented')
}
