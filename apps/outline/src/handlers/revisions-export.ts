import type { RouteHandler } from '@hono/zod-openapi'
import type { postRevisionsExportRoute } from '../routes'

export const postRevisionsExportRouteHandler: RouteHandler<
  typeof postRevisionsExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}
