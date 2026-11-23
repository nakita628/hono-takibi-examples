import type { RouteHandler } from '@hono/zod-openapi'
import type { getGlobalwinescoresIndexRoute, getGlobalwinescoresLatestIndexRoute } from '../routes'

export const getGlobalwinescoresIndexRouteHandler: RouteHandler<
  typeof getGlobalwinescoresIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getGlobalwinescoresLatestIndexRouteHandler: RouteHandler<
  typeof getGlobalwinescoresLatestIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
