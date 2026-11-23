import type { RouteHandler } from '@hono/zod-openapi'
import type { postRecordActionTrailsRoute } from '../routes'

export const postRecordActionTrailsRouteHandler: RouteHandler<
  typeof postRecordActionTrailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
