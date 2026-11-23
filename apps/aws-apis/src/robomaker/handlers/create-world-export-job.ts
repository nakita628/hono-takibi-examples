import type { RouteHandler } from '@hono/zod-openapi'
import type { postCreateWorldExportJobRoute } from '../routes'

export const postCreateWorldExportJobRouteHandler: RouteHandler<
  typeof postCreateWorldExportJobRoute
> = async (c) => {
  throw new Error('Not implemented')
}
