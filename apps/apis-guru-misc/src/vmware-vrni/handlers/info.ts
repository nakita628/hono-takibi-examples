import type { RouteHandler } from '@hono/zod-openapi'
import type { getInfoVersionRoute } from '../routes'

export const getInfoVersionRouteHandler: RouteHandler<typeof getInfoVersionRoute> = async (c) => {
  throw new Error('Not implemented')
}
