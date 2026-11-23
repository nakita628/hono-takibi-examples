import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateAppCookieStickinessPolicyRoute,
  postActionCreateAppCookieStickinessPolicyRoute,
} from '../routes'

export const getActionCreateAppCookieStickinessPolicyRouteHandler: RouteHandler<
  typeof getActionCreateAppCookieStickinessPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateAppCookieStickinessPolicyRouteHandler: RouteHandler<
  typeof postActionCreateAppCookieStickinessPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
