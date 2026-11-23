import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOptimalDirectionsOutputFormatRoute,
  postOptimalDirectionsOutputFormatRoute,
} from '../routes'

export const getOptimalDirectionsOutputFormatRouteHandler: RouteHandler<
  typeof getOptimalDirectionsOutputFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOptimalDirectionsOutputFormatRouteHandler: RouteHandler<
  typeof postOptimalDirectionsOutputFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}
