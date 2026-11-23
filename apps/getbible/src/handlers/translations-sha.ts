import type { RouteHandler } from '@hono/zod-openapi'
import type { getTranslationsShaRoute } from '../routes'

export const getTranslationsShaRouteHandler: RouteHandler<typeof getTranslationsShaRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
