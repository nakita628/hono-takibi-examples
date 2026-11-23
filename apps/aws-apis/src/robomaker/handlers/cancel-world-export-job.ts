import type { RouteHandler } from '@hono/zod-openapi'
import type { postCancelWorldExportJobRoute } from '../routes'

export const postCancelWorldExportJobRouteHandler: RouteHandler<
  typeof postCancelWorldExportJobRoute
> = async (c) => {
  throw new Error('Not implemented')
}
