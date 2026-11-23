import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionEnableImageDeprecationRoute,
  postActionEnableImageDeprecationRoute,
} from '../routes'

export const getActionEnableImageDeprecationRouteHandler: RouteHandler<
  typeof getActionEnableImageDeprecationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionEnableImageDeprecationRouteHandler: RouteHandler<
  typeof postActionEnableImageDeprecationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
