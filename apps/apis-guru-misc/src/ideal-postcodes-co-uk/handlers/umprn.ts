import type { RouteHandler } from '@hono/zod-openapi'
import type { getUmprnUmprnRoute } from '../routes'

export const getUmprnUmprnRouteHandler: RouteHandler<typeof getUmprnUmprnRoute> = async (c) => {
  throw new Error('Not implemented')
}
