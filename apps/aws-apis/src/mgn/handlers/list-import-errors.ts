import type { RouteHandler } from '@hono/zod-openapi'
import type { postListImportErrorsRoute } from '../routes'

export const postListImportErrorsRouteHandler: RouteHandler<
  typeof postListImportErrorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
