import type { RouteHandler } from '@hono/zod-openapi'
import type { getApiGetProfileRoute, getApiRequestTokenRoute } from '../routes'

export const getApiGetProfileRouteHandler: RouteHandler<typeof getApiGetProfileRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiRequestTokenRouteHandler: RouteHandler<typeof getApiRequestTokenRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
