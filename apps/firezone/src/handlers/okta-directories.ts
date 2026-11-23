import type { RouteHandler } from '@hono/zod-openapi'
import type { getOktaDirectoriesIdRoute, getOktaDirectoriesRoute } from '../routes'

export const getOktaDirectoriesIdRouteHandler: RouteHandler<
  typeof getOktaDirectoriesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOktaDirectoriesRouteHandler: RouteHandler<typeof getOktaDirectoriesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
