import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getWorkingStateIdIndexRoute,
  getWorkingStateIndexRoute,
  postWorkingStateIndexRoute,
} from '../routes'

export const getWorkingStateIndexRouteHandler: RouteHandler<
  typeof getWorkingStateIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWorkingStateIndexRouteHandler: RouteHandler<
  typeof postWorkingStateIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWorkingStateIdIndexRouteHandler: RouteHandler<
  typeof getWorkingStateIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
