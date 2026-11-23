import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getVideoGameRoute,
  getVideoGameSearchRoute,
  postVideoGameSearchRoute,
} from '../routes'

export const getVideoGameRouteHandler: RouteHandler<typeof getVideoGameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getVideoGameSearchRouteHandler: RouteHandler<typeof getVideoGameSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postVideoGameSearchRouteHandler: RouteHandler<
  typeof postVideoGameSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
