import type { RouteHandler } from '@hono/zod-openapi'
import type { getSavedadstylesRoute, getSavedadstylesSavedAdStyleIdRoute } from '../routes'

export const getSavedadstylesRouteHandler: RouteHandler<typeof getSavedadstylesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSavedadstylesSavedAdStyleIdRouteHandler: RouteHandler<
  typeof getSavedadstylesSavedAdStyleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
