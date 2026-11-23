import type { RouteHandler } from '@hono/zod-openapi'
import type { postQueryV1QueryFrontendServiceQueryRoute } from '../routes'

export const postQueryV1QueryFrontendServiceQueryRouteHandler: RouteHandler<
  typeof postQueryV1QueryFrontendServiceQueryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
