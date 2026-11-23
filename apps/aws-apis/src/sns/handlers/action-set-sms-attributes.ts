import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionSetSMSAttributesRoute, postActionSetSMSAttributesRoute } from '../routes'

export const getActionSetSMSAttributesRouteHandler: RouteHandler<
  typeof getActionSetSMSAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionSetSMSAttributesRouteHandler: RouteHandler<
  typeof postActionSetSMSAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
