import type { RouteHandler } from '@hono/zod-openapi'
import type { getCuratedSetsSlugRoute } from '../routes'

export const getCuratedSetsSlugRouteHandler: RouteHandler<typeof getCuratedSetsSlugRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
