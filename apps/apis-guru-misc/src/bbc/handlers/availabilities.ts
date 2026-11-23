import type { RouteHandler } from '@hono/zod-openapi'
import type { getAvailabilitiesRoute } from '../routes'

export const getAvailabilitiesRouteHandler: RouteHandler<typeof getAvailabilitiesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
