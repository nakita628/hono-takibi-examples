import type { RouteHandler } from '@hono/zod-openapi'
import type { getVersionsRoute } from '../routes'

export const getVersionsRouteHandler: RouteHandler<typeof getVersionsRoute> = async (c) => {
  throw new Error('Not implemented')
}
