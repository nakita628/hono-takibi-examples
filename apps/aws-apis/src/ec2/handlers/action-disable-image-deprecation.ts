import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDisableImageDeprecationRoute,
  postActionDisableImageDeprecationRoute,
} from '../routes'

export const getActionDisableImageDeprecationRouteHandler: RouteHandler<
  typeof getActionDisableImageDeprecationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDisableImageDeprecationRouteHandler: RouteHandler<
  typeof postActionDisableImageDeprecationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
