import type { RouteHandler } from '@hono/zod-openapi'
import type { getEntraDirectoriesIdRoute, getEntraDirectoriesRoute } from '../routes'

export const getEntraDirectoriesRouteHandler: RouteHandler<
  typeof getEntraDirectoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEntraDirectoriesIdRouteHandler: RouteHandler<
  typeof getEntraDirectoriesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
