import type { RouteHandler } from '@hono/zod-openapi'
import type { getSuggestedEditsIdsRoute, getSuggestedEditsRoute } from '../routes'

export const getSuggestedEditsRouteHandler: RouteHandler<typeof getSuggestedEditsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSuggestedEditsIdsRouteHandler: RouteHandler<
  typeof getSuggestedEditsIdsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
