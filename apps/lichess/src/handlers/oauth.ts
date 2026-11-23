import type { RouteHandler } from '@hono/zod-openapi'
import type { getOauthRoute } from '../routes'

export const getOauthRouteHandler: RouteHandler<typeof getOauthRoute> = async (c) => {
  throw new Error('Not implemented')
}
