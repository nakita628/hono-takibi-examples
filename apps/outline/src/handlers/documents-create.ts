import type { RouteHandler } from '@hono/zod-openapi'
import type { postDocumentsCreateRoute } from '../routes'

export const postDocumentsCreateRouteHandler: RouteHandler<
  typeof postDocumentsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
