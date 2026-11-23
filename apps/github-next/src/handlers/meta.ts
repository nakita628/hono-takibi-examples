import type { RouteHandler } from '@hono/zod-openapi'
import type { getMetaRoute } from '../routes'

export const getMetaRouteHandler: RouteHandler<typeof getMetaRoute> = async (c) => {
  throw new Error('Not implemented')
}
