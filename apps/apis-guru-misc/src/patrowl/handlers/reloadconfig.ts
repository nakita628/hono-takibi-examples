import type { RouteHandler } from '@hono/zod-openapi'
import type { getReloadconfigRoute } from '../routes'

export const getReloadconfigRouteHandler: RouteHandler<typeof getReloadconfigRoute> = async (c) => {
  throw new Error('Not implemented')
}
