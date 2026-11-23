import type { RouteHandler } from '@hono/zod-openapi'
import type { getOauthTokenRoute } from '../routes'

export const getOauthTokenRouteHandler: RouteHandler<typeof getOauthTokenRoute> = async (c) => {
  throw new Error('Not implemented')
}
