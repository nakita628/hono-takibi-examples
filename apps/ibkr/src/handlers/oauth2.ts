import type { RouteHandler } from '@hono/zod-openapi'
import type { postOauth2ApiV1TokenRoute } from '../routes'

export const postOauth2ApiV1TokenRouteHandler: RouteHandler<
  typeof postOauth2ApiV1TokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}
