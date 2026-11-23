import type { RouteHandler } from '@hono/zod-openapi'
import type { getOauthV2AccessRoute } from '../routes'

export const getOauthV2AccessRouteHandler: RouteHandler<typeof getOauthV2AccessRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
