import type { RouteHandler } from '@hono/zod-openapi'
import type { getPointRoute } from '../routes'

export const getPointRouteHandler: RouteHandler<typeof getPointRoute> = async (c) => {
  throw new Error('Not implemented')
}
