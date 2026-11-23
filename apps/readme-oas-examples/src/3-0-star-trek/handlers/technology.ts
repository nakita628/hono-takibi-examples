import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTechnologyRoute,
  getTechnologySearchRoute,
  postTechnologySearchRoute,
} from '../routes'

export const getTechnologyRouteHandler: RouteHandler<typeof getTechnologyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTechnologySearchRouteHandler: RouteHandler<
  typeof getTechnologySearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTechnologySearchRouteHandler: RouteHandler<
  typeof postTechnologySearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
