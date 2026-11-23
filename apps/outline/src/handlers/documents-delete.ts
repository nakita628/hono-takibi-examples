import type { RouteHandler } from '@hono/zod-openapi'
import type { postDocumentsDeleteRoute } from '../routes'

export const postDocumentsDeleteRouteHandler: RouteHandler<
  typeof postDocumentsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
