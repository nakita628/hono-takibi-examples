import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteLaunchTemplateVersionsRoute,
  postActionDeleteLaunchTemplateVersionsRoute,
} from '../routes'

export const getActionDeleteLaunchTemplateVersionsRouteHandler: RouteHandler<
  typeof getActionDeleteLaunchTemplateVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteLaunchTemplateVersionsRouteHandler: RouteHandler<
  typeof postActionDeleteLaunchTemplateVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
