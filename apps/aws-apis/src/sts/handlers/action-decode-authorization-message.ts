import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDecodeAuthorizationMessageRoute,
  postActionDecodeAuthorizationMessageRoute,
} from '../routes'

export const getActionDecodeAuthorizationMessageRouteHandler: RouteHandler<
  typeof getActionDecodeAuthorizationMessageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDecodeAuthorizationMessageRouteHandler: RouteHandler<
  typeof postActionDecodeAuthorizationMessageRoute
> = async (c) => {
  throw new Error('Not implemented')
}
