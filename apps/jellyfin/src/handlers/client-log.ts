import type { RouteHandler } from '@hono/zod-openapi'
import type { postClientLogDocumentRoute } from '../routes'

export const postClientLogDocumentRouteHandler: RouteHandler<
  typeof postClientLogDocumentRoute
> = async (c) => {
  throw new Error('Not implemented')
}
