import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetHLSStreamingSessionURLRoute } from '../routes'

export const postGetHLSStreamingSessionURLRouteHandler: RouteHandler<
  typeof postGetHLSStreamingSessionURLRoute
> = async (c) => {
  throw new Error('Not implemented')
}
