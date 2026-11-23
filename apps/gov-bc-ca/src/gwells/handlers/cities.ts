import type { RouteHandler } from '@hono/zod-openapi'
import type { getCitiesDrillersIndexRoute, getCitiesInstallersIndexRoute } from '../routes'

export const getCitiesDrillersIndexRouteHandler: RouteHandler<
  typeof getCitiesDrillersIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCitiesInstallersIndexRouteHandler: RouteHandler<
  typeof getCitiesInstallersIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
