import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeletePartnerRoute, postActionDeletePartnerRoute } from '../routes'

export const getActionDeletePartnerRouteHandler: RouteHandler<
  typeof getActionDeletePartnerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeletePartnerRouteHandler: RouteHandler<
  typeof postActionDeletePartnerRoute
> = async (c) => {
  throw new Error('Not implemented')
}
