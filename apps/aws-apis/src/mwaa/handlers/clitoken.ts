import type { RouteHandler } from '@hono/zod-openapi'
import type { postClitokenNameRoute } from '../routes'

export const postClitokenNameRouteHandler: RouteHandler<typeof postClitokenNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
