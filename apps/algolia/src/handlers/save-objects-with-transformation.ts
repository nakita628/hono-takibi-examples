import type { RouteHandler } from '@hono/zod-openapi'
import type { getSaveObjectsWithTransformationRoute } from '../routes'

export const getSaveObjectsWithTransformationRouteHandler: RouteHandler<
  typeof getSaveObjectsWithTransformationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
