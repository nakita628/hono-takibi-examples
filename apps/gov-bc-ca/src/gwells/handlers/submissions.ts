import type { RouteHandler } from '@hono/zod-openapi'
import type { getSubmissionsOptionsIndexRoute } from '../routes'

export const getSubmissionsOptionsIndexRouteHandler: RouteHandler<
  typeof getSubmissionsOptionsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
