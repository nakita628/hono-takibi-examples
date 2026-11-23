import type { RouteHandler } from '@hono/zod-openapi'
import type { postDocumentsMoveRoute } from '../routes'

export const postDocumentsMoveRouteHandler: RouteHandler<typeof postDocumentsMoveRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
