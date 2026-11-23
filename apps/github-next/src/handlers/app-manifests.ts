import type { RouteHandler } from '@hono/zod-openapi'
import type { postAppManifestsCodeConversionsRoute } from '../routes'

export const postAppManifestsCodeConversionsRouteHandler: RouteHandler<
  typeof postAppManifestsCodeConversionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
