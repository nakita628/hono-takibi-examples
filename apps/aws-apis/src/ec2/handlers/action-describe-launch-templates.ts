import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeLaunchTemplatesRoute,
  postActionDescribeLaunchTemplatesRoute,
} from '../routes'

export const getActionDescribeLaunchTemplatesRouteHandler: RouteHandler<
  typeof getActionDescribeLaunchTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeLaunchTemplatesRouteHandler: RouteHandler<
  typeof postActionDescribeLaunchTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
