import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionVerifyEmailIdentityRoute,
  postActionVerifyEmailIdentityRoute,
} from '../routes'

export const getActionVerifyEmailIdentityRouteHandler: RouteHandler<
  typeof getActionVerifyEmailIdentityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionVerifyEmailIdentityRouteHandler: RouteHandler<
  typeof postActionVerifyEmailIdentityRoute
> = async (c) => {
  throw new Error('Not implemented')
}
