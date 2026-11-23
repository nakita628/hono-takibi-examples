import type { RouteHandler } from '@hono/zod-openapi'
import type { getFeaturesConfigRoute } from '../routes'

export const getFeaturesConfigRouteHandler: RouteHandler<typeof getFeaturesConfigRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
