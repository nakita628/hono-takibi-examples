import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetAccessKeyLastUsedRoute,
  postActionGetAccessKeyLastUsedRoute,
} from '../routes'

export const getActionGetAccessKeyLastUsedRouteHandler: RouteHandler<
  typeof getActionGetAccessKeyLastUsedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetAccessKeyLastUsedRouteHandler: RouteHandler<
  typeof postActionGetAccessKeyLastUsedRoute
> = async (c) => {
  throw new Error('Not implemented')
}
