import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteLaunchTemplateRoute,
  postActionDeleteLaunchTemplateRoute,
} from '../routes'

export const getActionDeleteLaunchTemplateRouteHandler: RouteHandler<
  typeof getActionDeleteLaunchTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteLaunchTemplateRouteHandler: RouteHandler<
  typeof postActionDeleteLaunchTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
