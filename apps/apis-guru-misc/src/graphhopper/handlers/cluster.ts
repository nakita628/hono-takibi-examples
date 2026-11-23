import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getClusterSolutionJobIdRoute,
  postClusterCalculateRoute,
  postClusterRoute,
} from '../routes'

export const postClusterRouteHandler: RouteHandler<typeof postClusterRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postClusterCalculateRouteHandler: RouteHandler<
  typeof postClusterCalculateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getClusterSolutionJobIdRouteHandler: RouteHandler<
  typeof getClusterSolutionJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
