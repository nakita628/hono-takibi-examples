import type { RouteHandler } from '@hono/zod-openapi'
import type { getV1NameRoute, getV1ViolatingSitesRoute } from '../routes'

export const getV1ViolatingSitesRouteHandler: RouteHandler<
  typeof getV1ViolatingSitesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1NameRouteHandler: RouteHandler<typeof getV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}
