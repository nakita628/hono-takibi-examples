import type { RouteHandler } from '@hono/zod-openapi'
import type { getModelsRoute, postModelsModelAnalyzeRoute } from '../routes'

export const getModelsRouteHandler: RouteHandler<typeof getModelsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postModelsModelAnalyzeRouteHandler: RouteHandler<
  typeof postModelsModelAnalyzeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
