import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionSetPlatformApplicationAttributesRoute,
  postActionSetPlatformApplicationAttributesRoute,
} from '../routes'

export const getActionSetPlatformApplicationAttributesRouteHandler: RouteHandler<
  typeof getActionSetPlatformApplicationAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionSetPlatformApplicationAttributesRouteHandler: RouteHandler<
  typeof postActionSetPlatformApplicationAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
