import type { RouteHandler } from '@hono/zod-openapi'
import type { getFindPathwaysByLiteratureRoute } from '../routes'

export const getFindPathwaysByLiteratureRouteHandler: RouteHandler<
  typeof getFindPathwaysByLiteratureRoute
> = async (c) => {
  throw new Error('Not implemented')
}
