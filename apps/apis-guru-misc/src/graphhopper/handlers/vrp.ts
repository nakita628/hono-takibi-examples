import type { RouteHandler } from '@hono/zod-openapi'
import type { getVrpSolutionJobIdRoute, postVrpOptimizeRoute, postVrpRoute } from '../routes'

export const postVrpRouteHandler: RouteHandler<typeof postVrpRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postVrpOptimizeRouteHandler: RouteHandler<typeof postVrpOptimizeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getVrpSolutionJobIdRouteHandler: RouteHandler<
  typeof getVrpSolutionJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
