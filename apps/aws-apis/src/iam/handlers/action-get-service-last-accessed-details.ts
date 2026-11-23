import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetServiceLastAccessedDetailsRoute,
  postActionGetServiceLastAccessedDetailsRoute,
} from '../routes'

export const getActionGetServiceLastAccessedDetailsRouteHandler: RouteHandler<
  typeof getActionGetServiceLastAccessedDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetServiceLastAccessedDetailsRouteHandler: RouteHandler<
  typeof postActionGetServiceLastAccessedDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
