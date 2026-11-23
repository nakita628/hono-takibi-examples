import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionNotificationExportsIdRoute,
  postActionNotificationExportsRoute,
} from '../routes'

export const postActionNotificationExportsRouteHandler: RouteHandler<
  typeof postActionNotificationExportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getActionNotificationExportsIdRouteHandler: RouteHandler<
  typeof getActionNotificationExportsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
