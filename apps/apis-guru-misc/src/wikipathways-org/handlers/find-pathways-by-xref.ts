import type { RouteHandler } from '@hono/zod-openapi'
import type { getFindPathwaysByXrefRoute } from '../routes'

export const getFindPathwaysByXrefRouteHandler: RouteHandler<
  typeof getFindPathwaysByXrefRoute
> = async (c) => {
  throw new Error('Not implemented')
}
