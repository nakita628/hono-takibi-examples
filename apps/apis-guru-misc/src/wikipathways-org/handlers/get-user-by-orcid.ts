import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetUserByOrcidRoute } from '../routes'

export const getGetUserByOrcidRouteHandler: RouteHandler<typeof getGetUserByOrcidRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
