import type { RouteHandler } from '@hono/zod-openapi'
import type { postApplicationGetRoute } from '../routes'

export const postApplicationGetRouteHandler: RouteHandler<typeof postApplicationGetRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
