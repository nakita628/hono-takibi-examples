import type { RouteHandler } from '@hono/zod-openapi'
import type { getDistrictAdminsIdRoute, getDistrictAdminsRoute } from '../routes'

export const getDistrictAdminsRouteHandler: RouteHandler<typeof getDistrictAdminsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getDistrictAdminsIdRouteHandler: RouteHandler<
  typeof getDistrictAdminsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
