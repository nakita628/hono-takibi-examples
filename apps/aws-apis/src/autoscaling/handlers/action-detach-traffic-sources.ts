import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDetachTrafficSourcesRoute,
  postActionDetachTrafficSourcesRoute,
} from '../routes'

export const getActionDetachTrafficSourcesRouteHandler: RouteHandler<
  typeof getActionDetachTrafficSourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDetachTrafficSourcesRouteHandler: RouteHandler<
  typeof postActionDetachTrafficSourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
