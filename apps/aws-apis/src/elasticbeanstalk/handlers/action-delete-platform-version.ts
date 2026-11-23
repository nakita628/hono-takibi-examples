import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeletePlatformVersionRoute,
  postActionDeletePlatformVersionRoute,
} from '../routes'

export const getActionDeletePlatformVersionRouteHandler: RouteHandler<
  typeof getActionDeletePlatformVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeletePlatformVersionRouteHandler: RouteHandler<
  typeof postActionDeletePlatformVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
