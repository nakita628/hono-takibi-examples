import type { RouteHandler } from '@hono/zod-openapi'
import type { postContactEnrichRoute } from '../routes'

export const postContactEnrichRouteHandler: RouteHandler<typeof postContactEnrichRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
