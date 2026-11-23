import type { RouteHandler } from '@hono/zod-openapi'
import type { postQueryV1QueryBackendServiceInvokeRoute } from '../routes'

export const postQueryV1QueryBackendServiceInvokeRouteHandler: RouteHandler<
  typeof postQueryV1QueryBackendServiceInvokeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
