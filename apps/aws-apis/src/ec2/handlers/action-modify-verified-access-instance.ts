import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyVerifiedAccessInstanceRoute,
  postActionModifyVerifiedAccessInstanceRoute,
} from '../routes'

export const getActionModifyVerifiedAccessInstanceRouteHandler: RouteHandler<
  typeof getActionModifyVerifiedAccessInstanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyVerifiedAccessInstanceRouteHandler: RouteHandler<
  typeof postActionModifyVerifiedAccessInstanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
