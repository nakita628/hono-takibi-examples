import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCancelImageLaunchPermissionRoute,
  postActionCancelImageLaunchPermissionRoute,
} from '../routes'

export const getActionCancelImageLaunchPermissionRouteHandler: RouteHandler<
  typeof getActionCancelImageLaunchPermissionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCancelImageLaunchPermissionRouteHandler: RouteHandler<
  typeof postActionCancelImageLaunchPermissionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
