import type { RouteHandler } from '@hono/zod-openapi'
import type { getNameConceptTypeSpecificConceptJsonRoute } from '../routes'

export const getNameConceptTypeSpecificConceptJsonRouteHandler: RouteHandler<
  typeof getNameConceptTypeSpecificConceptJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
