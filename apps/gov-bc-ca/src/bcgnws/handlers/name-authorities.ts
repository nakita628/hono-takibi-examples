import type { RouteHandler } from '@hono/zod-openapi'
import type { getNameAuthoritiesRoute } from '../routes'

export const getNameAuthoritiesRouteHandler: RouteHandler<typeof getNameAuthoritiesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
