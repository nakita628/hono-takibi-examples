import type { RouteHandler } from '@hono/zod-openapi'
import type { getReplaceAllObjectsRoute } from '../routes'

export const getReplaceAllObjectsRouteHandler: RouteHandler<
  typeof getReplaceAllObjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
