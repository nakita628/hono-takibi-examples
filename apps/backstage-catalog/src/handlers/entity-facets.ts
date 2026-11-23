import type { RouteHandler } from '@hono/zod-openapi'
import type { getEntityFacetsRoute, postEntityFacetsRoute } from '../routes'

export const getEntityFacetsRouteHandler: RouteHandler<typeof getEntityFacetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postEntityFacetsRouteHandler: RouteHandler<typeof postEntityFacetsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
