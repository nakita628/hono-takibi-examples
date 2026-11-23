import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionConfigureHealthCheckRoute,
  postActionConfigureHealthCheckRoute,
} from '../routes'

export const getActionConfigureHealthCheckRouteHandler: RouteHandler<
  typeof getActionConfigureHealthCheckRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionConfigureHealthCheckRouteHandler: RouteHandler<
  typeof postActionConfigureHealthCheckRoute
> = async (c) => {
  throw new Error('Not implemented')
}
