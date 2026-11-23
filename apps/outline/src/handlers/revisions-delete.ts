import type { RouteHandler } from '@hono/zod-openapi'
import type { postRevisionsDeleteRoute } from '../routes'

export const postRevisionsDeleteRouteHandler: RouteHandler<
  typeof postRevisionsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
