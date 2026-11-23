import type { RouteHandler } from '@hono/zod-openapi'
import type { postUsZipLookupsRoute } from '../routes'

export const postUsZipLookupsRouteHandler: RouteHandler<typeof postUsZipLookupsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
