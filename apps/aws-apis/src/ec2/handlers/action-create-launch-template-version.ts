import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateLaunchTemplateVersionRoute,
  postActionCreateLaunchTemplateVersionRoute,
} from '../routes'

export const getActionCreateLaunchTemplateVersionRouteHandler: RouteHandler<
  typeof getActionCreateLaunchTemplateVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateLaunchTemplateVersionRouteHandler: RouteHandler<
  typeof postActionCreateLaunchTemplateVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
