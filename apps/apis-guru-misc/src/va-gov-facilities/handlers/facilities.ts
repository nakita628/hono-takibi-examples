import type { RouteHandler } from '@hono/zod-openapi'
import type { getFacilitiesAllRoute, getFacilitiesIdRoute, getFacilitiesRoute } from '../routes'

export const getFacilitiesRouteHandler: RouteHandler<typeof getFacilitiesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getFacilitiesAllRouteHandler: RouteHandler<typeof getFacilitiesAllRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getFacilitiesIdRouteHandler: RouteHandler<typeof getFacilitiesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
