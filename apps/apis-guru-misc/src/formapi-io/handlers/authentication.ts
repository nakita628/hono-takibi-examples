import type { RouteHandler } from '@hono/zod-openapi'
import type { getAuthenticationRoute } from '../routes'

export const getAuthenticationRouteHandler: RouteHandler<typeof getAuthenticationRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
