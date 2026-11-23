import type { RouteHandler } from '@hono/zod-openapi'
import type { postCheckSpellingRoute } from '../routes'

export const postCheckSpellingRouteHandler: RouteHandler<typeof postCheckSpellingRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
