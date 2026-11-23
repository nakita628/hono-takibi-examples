import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreatePlatformVersionRoute,
  postActionCreatePlatformVersionRoute,
} from '../routes'

export const getActionCreatePlatformVersionRouteHandler: RouteHandler<
  typeof getActionCreatePlatformVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreatePlatformVersionRouteHandler: RouteHandler<
  typeof postActionCreatePlatformVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
