import type { RouteHandler } from '@hono/zod-openapi'
import type { getSearchIdTypeIdRoute, getSearchTypeRoute } from '../routes'

export const getSearchIdTypeIdRouteHandler: RouteHandler<typeof getSearchIdTypeIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSearchTypeRouteHandler: RouteHandler<typeof getSearchTypeRoute> = async (c) => {
  throw new Error('Not implemented')
}
