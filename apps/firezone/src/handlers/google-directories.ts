import type { RouteHandler } from '@hono/zod-openapi'
import type { getGoogleDirectoriesIdRoute, getGoogleDirectoriesRoute } from '../routes'

export const getGoogleDirectoriesRouteHandler: RouteHandler<
  typeof getGoogleDirectoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getGoogleDirectoriesIdRouteHandler: RouteHandler<
  typeof getGoogleDirectoriesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
