import type { RouteHandler } from '@hono/zod-openapi'
import type { getUserExtensionsRoute } from '../routes'

export const getUserExtensionsRouteHandler: RouteHandler<typeof getUserExtensionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
