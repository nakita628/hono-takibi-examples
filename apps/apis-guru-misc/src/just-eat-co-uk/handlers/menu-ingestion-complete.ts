import type { RouteHandler } from '@hono/zod-openapi'
import type { postMenuIngestionCompleteRoute } from '../routes'

export const postMenuIngestionCompleteRouteHandler: RouteHandler<
  typeof postMenuIngestionCompleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
