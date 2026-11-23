import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetLaunchTemplateDataRoute,
  postActionGetLaunchTemplateDataRoute,
} from '../routes'

export const getActionGetLaunchTemplateDataRouteHandler: RouteHandler<
  typeof getActionGetLaunchTemplateDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetLaunchTemplateDataRouteHandler: RouteHandler<
  typeof postActionGetLaunchTemplateDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}
