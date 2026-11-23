import type { RouteHandler } from '@hono/zod-openapi'
import type { getCitationsStylesIndexRoute, getCitationsStylesStyleIdIndexRoute } from '../routes'

export const getCitationsStylesIndexRouteHandler: RouteHandler<
  typeof getCitationsStylesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCitationsStylesStyleIdIndexRouteHandler: RouteHandler<
  typeof getCitationsStylesStyleIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
