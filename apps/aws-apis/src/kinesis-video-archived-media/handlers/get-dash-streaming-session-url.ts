import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetDASHStreamingSessionURLRoute } from '../routes'

export const postGetDASHStreamingSessionURLRouteHandler: RouteHandler<
  typeof postGetDASHStreamingSessionURLRoute
> = async (c) => {
  throw new Error('Not implemented')
}
