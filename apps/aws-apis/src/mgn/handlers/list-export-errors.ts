import type { RouteHandler } from '@hono/zod-openapi'
import type { postListExportErrorsRoute } from '../routes'

export const postListExportErrorsRouteHandler: RouteHandler<
  typeof postListExportErrorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
