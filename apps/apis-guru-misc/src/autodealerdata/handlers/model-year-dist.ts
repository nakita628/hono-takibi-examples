import type { RouteHandler } from '@hono/zod-openapi'
import type { getModelYearDistRoute } from '../routes'

export const getModelYearDistRouteHandler: RouteHandler<typeof getModelYearDistRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
