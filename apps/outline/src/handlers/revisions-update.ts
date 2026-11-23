import type { RouteHandler } from '@hono/zod-openapi'
import type { postRevisionsUpdateRoute } from '../routes'

export const postRevisionsUpdateRouteHandler: RouteHandler<
  typeof postRevisionsUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
