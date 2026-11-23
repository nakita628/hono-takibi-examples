import type { RouteHandler } from '@hono/zod-openapi'
import type { getFindPathwaysByTextRoute } from '../routes'

export const getFindPathwaysByTextRouteHandler: RouteHandler<
  typeof getFindPathwaysByTextRoute
> = async (c) => {
  throw new Error('Not implemented')
}
