import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionGetSMSAttributesRoute, postActionGetSMSAttributesRoute } from '../routes'

export const getActionGetSMSAttributesRouteHandler: RouteHandler<
  typeof getActionGetSMSAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetSMSAttributesRouteHandler: RouteHandler<
  typeof postActionGetSMSAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
