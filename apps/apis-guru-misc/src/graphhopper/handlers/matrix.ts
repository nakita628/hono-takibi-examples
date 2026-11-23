import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getMatrixRoute,
  getMatrixSolutionJobIdRoute,
  postMatrixCalculateRoute,
  postMatrixRoute,
} from '../routes'

export const getMatrixRouteHandler: RouteHandler<typeof getMatrixRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMatrixRouteHandler: RouteHandler<typeof postMatrixRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMatrixCalculateRouteHandler: RouteHandler<
  typeof postMatrixCalculateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMatrixSolutionJobIdRouteHandler: RouteHandler<
  typeof getMatrixSolutionJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
