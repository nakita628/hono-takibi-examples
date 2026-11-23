import type { RouteHandler } from '@hono/zod-openapi'
import type { getV1EntitiesSearchRoute } from '../routes'

export const getV1EntitiesSearchRouteHandler: RouteHandler<
  typeof getV1EntitiesSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
