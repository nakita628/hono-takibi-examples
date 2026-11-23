import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetaddressmatchRoute } from '../routes'

export const getGetaddressmatchRouteHandler: RouteHandler<typeof getGetaddressmatchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
