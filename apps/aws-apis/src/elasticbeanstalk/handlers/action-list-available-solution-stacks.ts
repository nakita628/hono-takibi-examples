import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionListAvailableSolutionStacksRoute,
  postActionListAvailableSolutionStacksRoute,
} from '../routes'

export const getActionListAvailableSolutionStacksRouteHandler: RouteHandler<
  typeof getActionListAvailableSolutionStacksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListAvailableSolutionStacksRouteHandler: RouteHandler<
  typeof postActionListAvailableSolutionStacksRoute
> = async (c) => {
  throw new Error('Not implemented')
}
