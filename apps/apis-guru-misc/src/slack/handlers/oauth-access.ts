import type { RouteHandler } from '@hono/zod-openapi'
import type { getOauthAccessRoute } from '../routes'

export const getOauthAccessRouteHandler: RouteHandler<typeof getOauthAccessRoute> = async (c) => {
  throw new Error('Not implemented')
}
