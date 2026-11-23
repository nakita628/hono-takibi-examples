import type { RouteHandler } from '@hono/zod-openapi'
import type { getDocumentLinksRoute } from '../routes'

export const getDocumentLinksRouteHandler: RouteHandler<typeof getDocumentLinksRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
