import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetAccountAuthorizationDetailsRoute,
  postActionGetAccountAuthorizationDetailsRoute,
} from '../routes'

export const getActionGetAccountAuthorizationDetailsRouteHandler: RouteHandler<
  typeof getActionGetAccountAuthorizationDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetAccountAuthorizationDetailsRouteHandler: RouteHandler<
  typeof postActionGetAccountAuthorizationDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
