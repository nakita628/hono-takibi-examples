import type { RouteHandler } from '@hono/zod-openapi'
import type { getEngineManifestRoute } from '../routes'

export const getEngineManifestRouteHandler: RouteHandler<typeof getEngineManifestRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
