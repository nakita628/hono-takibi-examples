import type { RouteHandler } from '@hono/zod-openapi'
import type { postDocumentsListRoute } from '../routes'

export const postDocumentsListRouteHandler: RouteHandler<typeof postDocumentsListRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
