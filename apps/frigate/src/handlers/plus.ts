import type { RouteHandler } from '@hono/zod-openapi'
import type { getPlusModelsRoute, postPlusValidateRoute } from '../routes'

export const getPlusModelsRouteHandler: RouteHandler<typeof getPlusModelsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPlusValidateRouteHandler: RouteHandler<typeof postPlusValidateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
