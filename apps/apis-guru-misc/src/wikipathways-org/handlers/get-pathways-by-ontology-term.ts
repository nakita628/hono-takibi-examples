import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetPathwaysByOntologyTermRoute } from '../routes'

export const getGetPathwaysByOntologyTermRouteHandler: RouteHandler<
  typeof getGetPathwaysByOntologyTermRoute
> = async (c) => {
  throw new Error('Not implemented')
}
