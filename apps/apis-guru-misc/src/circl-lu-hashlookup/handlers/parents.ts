import type { RouteHandler } from '@hono/zod-openapi'
import type { getParentsSha1CountCursorRoute } from '../routes'

export const getParentsSha1CountCursorRouteHandler: RouteHandler<
  typeof getParentsSha1CountCursorRoute
> = async (c) => {
  throw new Error('Not implemented')
}
