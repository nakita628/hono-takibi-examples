import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionAddPartnerRoute, postActionAddPartnerRoute } from '../routes'

export const getActionAddPartnerRouteHandler: RouteHandler<
  typeof getActionAddPartnerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAddPartnerRouteHandler: RouteHandler<
  typeof postActionAddPartnerRoute
> = async (c) => {
  throw new Error('Not implemented')
}
