import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateVerifiedAccessInstanceRoute,
  postActionCreateVerifiedAccessInstanceRoute,
} from '../routes'

export const getActionCreateVerifiedAccessInstanceRouteHandler: RouteHandler<
  typeof getActionCreateVerifiedAccessInstanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateVerifiedAccessInstanceRouteHandler: RouteHandler<
  typeof postActionCreateVerifiedAccessInstanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
