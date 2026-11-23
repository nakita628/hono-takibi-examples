import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionResetImageAttributeRoute,
  postActionResetImageAttributeRoute,
} from '../routes'

export const getActionResetImageAttributeRouteHandler: RouteHandler<
  typeof getActionResetImageAttributeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionResetImageAttributeRouteHandler: RouteHandler<
  typeof postActionResetImageAttributeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
