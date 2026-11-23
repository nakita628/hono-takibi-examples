import type { RouteHandler } from '@hono/zod-openapi'
import type { postVersionV1VersionVersionRoute } from '../routes'

export const postVersionV1VersionVersionRouteHandler: RouteHandler<
  typeof postVersionV1VersionVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
