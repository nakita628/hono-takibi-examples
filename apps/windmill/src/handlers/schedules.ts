import type { RouteHandler } from '@hono/zod-openapi'
import type { postSchedulesPreviewRoute } from '../routes'

export const postSchedulesPreviewRouteHandler: RouteHandler<
  typeof postSchedulesPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}
