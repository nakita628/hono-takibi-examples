import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeletePlatformApplicationRoute,
  postActionDeletePlatformApplicationRoute,
} from '../routes'

export const getActionDeletePlatformApplicationRouteHandler: RouteHandler<
  typeof getActionDeletePlatformApplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeletePlatformApplicationRouteHandler: RouteHandler<
  typeof postActionDeletePlatformApplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
