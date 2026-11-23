import type { RouteHandler } from '@hono/zod-openapi'
import type { postDocumentsInfoRoute } from '../routes'

export const postDocumentsInfoRouteHandler: RouteHandler<typeof postDocumentsInfoRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
