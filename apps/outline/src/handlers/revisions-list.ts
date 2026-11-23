import type { RouteHandler } from '@hono/zod-openapi'
import type { postRevisionsListRoute } from '../routes'

export const postRevisionsListRouteHandler: RouteHandler<typeof postRevisionsListRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
