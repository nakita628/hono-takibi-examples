import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionAttachTrafficSourcesRoute,
  postActionAttachTrafficSourcesRoute,
} from '../routes'

export const getActionAttachTrafficSourcesRouteHandler: RouteHandler<
  typeof getActionAttachTrafficSourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAttachTrafficSourcesRouteHandler: RouteHandler<
  typeof postActionAttachTrafficSourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
