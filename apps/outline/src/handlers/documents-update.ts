import type { RouteHandler } from '@hono/zod-openapi'
import type { postDocumentsUpdateRoute } from '../routes'

export const postDocumentsUpdateRouteHandler: RouteHandler<
  typeof postDocumentsUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
