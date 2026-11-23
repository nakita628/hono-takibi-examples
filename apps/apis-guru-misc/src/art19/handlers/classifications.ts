import type { RouteHandler } from '@hono/zod-openapi'
import type { getClassificationsIdRoute, getClassificationsRoute } from '../routes'

export const getClassificationsRouteHandler: RouteHandler<typeof getClassificationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getClassificationsIdRouteHandler: RouteHandler<
  typeof getClassificationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
