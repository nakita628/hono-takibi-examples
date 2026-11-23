import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionResetInstanceAttributeRoute,
  postActionResetInstanceAttributeRoute,
} from '../routes'

export const getActionResetInstanceAttributeRouteHandler: RouteHandler<
  typeof getActionResetInstanceAttributeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionResetInstanceAttributeRouteHandler: RouteHandler<
  typeof postActionResetInstanceAttributeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
