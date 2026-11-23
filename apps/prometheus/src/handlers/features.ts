import type { RouteHandler } from '@hono/zod-openapi'
import type { getFeaturesRoute } from '../routes'

export const getFeaturesRouteHandler: RouteHandler<typeof getFeaturesRoute> = async (c) => {
  throw new Error('Not implemented')
}
