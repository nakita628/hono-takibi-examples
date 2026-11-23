import type { RouteHandler } from '@hono/zod-openapi'
import type { getPlansIndexRoute } from '../routes'

export const getPlansIndexRouteHandler: RouteHandler<typeof getPlansIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}
