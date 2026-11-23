import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateLaunchTemplateRoute,
  postActionCreateLaunchTemplateRoute,
} from '../routes'

export const getActionCreateLaunchTemplateRouteHandler: RouteHandler<
  typeof getActionCreateLaunchTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateLaunchTemplateRouteHandler: RouteHandler<
  typeof postActionCreateLaunchTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
