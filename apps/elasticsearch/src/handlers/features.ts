import type { RouteHandler } from '@hono/zod-openapi'
import type { getFeaturesRoute, postFeaturesResetRoute } from '../routes'

export const getFeaturesRouteHandler: RouteHandler<typeof getFeaturesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postFeaturesResetRouteHandler: RouteHandler<typeof postFeaturesResetRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
