import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetPlatformApplicationAttributesRoute,
  postActionGetPlatformApplicationAttributesRoute,
} from '../routes'

export const getActionGetPlatformApplicationAttributesRouteHandler: RouteHandler<
  typeof getActionGetPlatformApplicationAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetPlatformApplicationAttributesRouteHandler: RouteHandler<
  typeof postActionGetPlatformApplicationAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
