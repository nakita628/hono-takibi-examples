import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteVerifiedAccessInstanceRoute,
  postActionDeleteVerifiedAccessInstanceRoute,
} from '../routes'

export const getActionDeleteVerifiedAccessInstanceRouteHandler: RouteHandler<
  typeof getActionDeleteVerifiedAccessInstanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteVerifiedAccessInstanceRouteHandler: RouteHandler<
  typeof postActionDeleteVerifiedAccessInstanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
