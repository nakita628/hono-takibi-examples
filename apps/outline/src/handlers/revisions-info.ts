import type { RouteHandler } from '@hono/zod-openapi'
import type { postRevisionsInfoRoute } from '../routes'

export const postRevisionsInfoRouteHandler: RouteHandler<typeof postRevisionsInfoRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
