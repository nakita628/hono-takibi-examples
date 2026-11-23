import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionListPlatformVersionsRoute,
  postActionListPlatformVersionsRoute,
} from '../routes'

export const getActionListPlatformVersionsRouteHandler: RouteHandler<
  typeof getActionListPlatformVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListPlatformVersionsRouteHandler: RouteHandler<
  typeof postActionListPlatformVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
