import type { RouteHandler } from '@hono/zod-openapi'
import type { getWikisWikiIdContentIndexRoute, getWikisWikiIdIndexRoute } from '../routes'

export const getWikisWikiIdIndexRouteHandler: RouteHandler<
  typeof getWikisWikiIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikisWikiIdContentIndexRouteHandler: RouteHandler<
  typeof getWikisWikiIdContentIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
