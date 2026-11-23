import type { RouteHandler } from '@hono/zod-openapi'
import type { getOauthScopesRoute } from '../routes'

export const getOauthScopesRouteHandler: RouteHandler<typeof getOauthScopesRoute> = async (c) => {
  throw new Error('Not implemented')
}
