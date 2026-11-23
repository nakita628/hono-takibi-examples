import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetPathwaysByParentOntologyTermRoute } from '../routes'

export const getGetPathwaysByParentOntologyTermRouteHandler: RouteHandler<
  typeof getGetPathwaysByParentOntologyTermRoute
> = async (c) => {
  throw new Error('Not implemented')
}
