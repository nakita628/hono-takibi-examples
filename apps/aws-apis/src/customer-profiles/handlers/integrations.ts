import type { RouteHandler } from '@hono/zod-openapi'
import type { postIntegrationsRoute } from '../routes'

export const postIntegrationsRouteHandler: RouteHandler<typeof postIntegrationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
