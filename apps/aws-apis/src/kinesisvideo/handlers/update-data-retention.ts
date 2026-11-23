import type { RouteHandler } from '@hono/zod-openapi'
import type { postUpdateDataRetentionRoute } from '../routes'

export const postUpdateDataRetentionRouteHandler: RouteHandler<
  typeof postUpdateDataRetentionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
