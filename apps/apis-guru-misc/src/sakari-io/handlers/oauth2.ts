import type { RouteHandler } from '@hono/zod-openapi'
import type { postOauth2TokenRoute } from '../routes'

export const postOauth2TokenRouteHandler: RouteHandler<typeof postOauth2TokenRoute> = async (c) => {
  throw new Error('Not implemented')
}
