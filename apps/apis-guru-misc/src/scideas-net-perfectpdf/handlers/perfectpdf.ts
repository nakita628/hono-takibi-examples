import type { RouteHandler } from '@hono/zod-openapi'
import type { postPerfectpdfApiRoute } from '../routes'

export const postPerfectpdfApiRouteHandler: RouteHandler<typeof postPerfectpdfApiRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
