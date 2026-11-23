import type { RouteHandler } from '@hono/zod-openapi'
import type { getIconPngRoute } from '../routes'

export const getIconPngRouteHandler: RouteHandler<typeof getIconPngRoute> = async (c) => {
  throw new Error('Not implemented')
}
