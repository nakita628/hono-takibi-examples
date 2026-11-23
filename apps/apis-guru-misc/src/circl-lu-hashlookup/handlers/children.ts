import type { RouteHandler } from '@hono/zod-openapi'
import type { getChildrenSha1CountCursorRoute } from '../routes'

export const getChildrenSha1CountCursorRouteHandler: RouteHandler<
  typeof getChildrenSha1CountCursorRoute
> = async (c) => {
  throw new Error('Not implemented')
}
