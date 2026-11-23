import type { RouteHandler } from '@hono/zod-openapi'
import type { putCreateComponentRoute } from '../routes'

export const putCreateComponentRouteHandler: RouteHandler<typeof putCreateComponentRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
