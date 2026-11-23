import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetMediaForFragmentListRoute } from '../routes'

export const postGetMediaForFragmentListRouteHandler: RouteHandler<
  typeof postGetMediaForFragmentListRoute
> = async (c) => {
  throw new Error('Not implemented')
}
