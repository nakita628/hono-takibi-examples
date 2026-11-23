import type { RouteHandler } from '@hono/zod-openapi'
import type { getEeBtEligibilityRoute } from '../routes'

export const getEeBtEligibilityRouteHandler: RouteHandler<typeof getEeBtEligibilityRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
