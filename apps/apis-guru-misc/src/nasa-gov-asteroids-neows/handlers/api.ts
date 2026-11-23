import type { RouteHandler } from '@hono/zod-openapi'
import type { getApiProjectsFormatRoute, getApiProjectsIdFormatRoute, getApiRoute } from '../routes'

export const getApiRouteHandler: RouteHandler<typeof getApiRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiProjectsIdFormatRouteHandler: RouteHandler<
  typeof getApiProjectsIdFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiProjectsFormatRouteHandler: RouteHandler<
  typeof getApiProjectsFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}
