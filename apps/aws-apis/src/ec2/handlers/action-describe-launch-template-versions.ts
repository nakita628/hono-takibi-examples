import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeLaunchTemplateVersionsRoute,
  postActionDescribeLaunchTemplateVersionsRoute,
} from '../routes'

export const getActionDescribeLaunchTemplateVersionsRouteHandler: RouteHandler<
  typeof getActionDescribeLaunchTemplateVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeLaunchTemplateVersionsRouteHandler: RouteHandler<
  typeof postActionDescribeLaunchTemplateVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
