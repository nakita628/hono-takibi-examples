import type { RouteHandler } from '@hono/zod-openapi'
import type { getAuthenticatorsRoute } from '../routes'

export const getAuthenticatorsRouteHandler: RouteHandler<typeof getAuthenticatorsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
