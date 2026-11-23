import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionSetIdentityFeedbackForwardingEnabledRoute,
  postActionSetIdentityFeedbackForwardingEnabledRoute,
} from '../routes'

export const getActionSetIdentityFeedbackForwardingEnabledRouteHandler: RouteHandler<
  typeof getActionSetIdentityFeedbackForwardingEnabledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionSetIdentityFeedbackForwardingEnabledRouteHandler: RouteHandler<
  typeof postActionSetIdentityFeedbackForwardingEnabledRoute
> = async (c) => {
  throw new Error('Not implemented')
}
