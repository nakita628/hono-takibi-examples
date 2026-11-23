import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionListPlatformApplicationsRoute,
  postActionListPlatformApplicationsRoute,
} from '../routes'

export const getActionListPlatformApplicationsRouteHandler: RouteHandler<
  typeof getActionListPlatformApplicationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListPlatformApplicationsRouteHandler: RouteHandler<
  typeof postActionListPlatformApplicationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
