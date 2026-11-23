import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCubbyholePathRoute,
  getCubbyholePathIndexRoute,
  getCubbyholePathRoute,
  postCubbyholePathRoute,
} from '../routes'

export const getCubbyholePathRouteHandler: RouteHandler<typeof getCubbyholePathRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postCubbyholePathRouteHandler: RouteHandler<typeof postCubbyholePathRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteCubbyholePathRouteHandler: RouteHandler<
  typeof deleteCubbyholePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCubbyholePathIndexRouteHandler: RouteHandler<
  typeof getCubbyholePathIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
