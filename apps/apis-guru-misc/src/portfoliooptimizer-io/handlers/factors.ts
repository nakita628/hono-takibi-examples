import type { RouteHandler } from '@hono/zod-openapi'
import type { postFactorsResidualizationRoute } from '../routes'

export const postFactorsResidualizationRouteHandler: RouteHandler<
  typeof postFactorsResidualizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
