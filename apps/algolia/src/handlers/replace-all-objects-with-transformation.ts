import type { RouteHandler } from '@hono/zod-openapi'
import type { getReplaceAllObjectsWithTransformationRoute } from '../routes'

export const getReplaceAllObjectsWithTransformationRouteHandler: RouteHandler<
  typeof getReplaceAllObjectsWithTransformationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
