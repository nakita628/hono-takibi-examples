import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getUserContentByDateJsonRoute,
  getUserContentRecentJsonRoute,
  getUserContentUrlJsonRoute,
  getUserContentUserJsonRoute,
} from '../routes'

export const getUserContentByDateJsonRouteHandler: RouteHandler<
  typeof getUserContentByDateJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserContentRecentJsonRouteHandler: RouteHandler<
  typeof getUserContentRecentJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserContentUrlJsonRouteHandler: RouteHandler<
  typeof getUserContentUrlJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserContentUserJsonRouteHandler: RouteHandler<
  typeof getUserContentUserJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
