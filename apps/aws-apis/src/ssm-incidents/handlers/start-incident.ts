import type { RouteHandler } from '@hono/zod-openapi'
import type { postStartIncidentRoute } from '../routes'

export const postStartIncidentRouteHandler: RouteHandler<typeof postStartIncidentRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
