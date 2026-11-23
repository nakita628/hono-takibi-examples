import type { RouteHandler } from '@hono/zod-openapi'
import type { postRuntimeVersionsRoute } from '../routes'

export const postRuntimeVersionsRouteHandler: RouteHandler<
  typeof postRuntimeVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
