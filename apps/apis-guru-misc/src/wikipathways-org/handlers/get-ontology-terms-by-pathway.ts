import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetOntologyTermsByPathwayRoute } from '../routes'

export const getGetOntologyTermsByPathwayRouteHandler: RouteHandler<
  typeof getGetOntologyTermsByPathwayRoute
> = async (c) => {
  throw new Error('Not implemented')
}
