import type { RouteHandler } from '@hono/zod-openapi'
import type { getLinearregslopeRoute } from '../routes'

export const getLinearregslopeRouteHandler: RouteHandler<typeof getLinearregslopeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
