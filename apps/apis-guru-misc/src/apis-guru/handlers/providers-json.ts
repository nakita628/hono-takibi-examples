import type { RouteHandler } from '@hono/zod-openapi'
import type { getProvidersJsonRoute } from '../routes'

export const getProvidersJsonRouteHandler: RouteHandler<typeof getProvidersJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
