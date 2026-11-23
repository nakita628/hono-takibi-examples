import type { RouteHandler } from '@hono/zod-openapi'
import type { getRadAnalystIndexRoute } from '../routes'

export const getRadAnalystIndexRouteHandler: RouteHandler<typeof getRadAnalystIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
