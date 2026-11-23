import type { RouteHandler } from '@hono/zod-openapi'
import type { postInsightImpactGraphRoute } from '../routes'

export const postInsightImpactGraphRouteHandler: RouteHandler<
  typeof postInsightImpactGraphRoute
> = async (c) => {
  throw new Error('Not implemented')
}
