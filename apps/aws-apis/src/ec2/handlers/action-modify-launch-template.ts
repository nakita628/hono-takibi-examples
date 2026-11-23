import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyLaunchTemplateRoute,
  postActionModifyLaunchTemplateRoute,
} from '../routes'

export const getActionModifyLaunchTemplateRouteHandler: RouteHandler<
  typeof getActionModifyLaunchTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyLaunchTemplateRouteHandler: RouteHandler<
  typeof postActionModifyLaunchTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
