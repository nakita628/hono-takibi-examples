import type { RouteHandler } from '@hono/zod-openapi'
import type { getEnvImpactPeriodRoute } from '../routes'

export const getEnvImpactPeriodRouteHandler: RouteHandler<typeof getEnvImpactPeriodRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
