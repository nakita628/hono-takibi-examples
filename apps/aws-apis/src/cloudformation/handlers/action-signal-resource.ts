import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionSignalResourceRoute, postActionSignalResourceRoute } from '../routes'

export const getActionSignalResourceRouteHandler: RouteHandler<
  typeof getActionSignalResourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionSignalResourceRouteHandler: RouteHandler<
  typeof postActionSignalResourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
