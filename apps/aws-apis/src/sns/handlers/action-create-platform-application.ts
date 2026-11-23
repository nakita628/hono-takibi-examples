import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreatePlatformApplicationRoute,
  postActionCreatePlatformApplicationRoute,
} from '../routes'

export const getActionCreatePlatformApplicationRouteHandler: RouteHandler<
  typeof getActionCreatePlatformApplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreatePlatformApplicationRouteHandler: RouteHandler<
  typeof postActionCreatePlatformApplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
