import type { RouteHandler } from '@hono/zod-openapi'
import type { postFileToStringRoute } from '../routes'

export const postFileToStringRouteHandler: RouteHandler<typeof postFileToStringRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
