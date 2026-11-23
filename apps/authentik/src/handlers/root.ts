import type { RouteHandler } from '@hono/zod-openapi'
import type { getRootConfigIndexRoute } from '../routes'

export const getRootConfigIndexRouteHandler: RouteHandler<typeof getRootConfigIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
