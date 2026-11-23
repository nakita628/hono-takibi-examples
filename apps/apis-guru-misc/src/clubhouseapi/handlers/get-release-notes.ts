import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetReleaseNotesRoute } from '../routes'

export const postGetReleaseNotesRouteHandler: RouteHandler<
  typeof postGetReleaseNotesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
