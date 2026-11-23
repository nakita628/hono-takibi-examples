import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionGetTemplateSummaryRoute, postActionGetTemplateSummaryRoute } from '../routes'

export const getActionGetTemplateSummaryRouteHandler: RouteHandler<
  typeof getActionGetTemplateSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetTemplateSummaryRouteHandler: RouteHandler<
  typeof postActionGetTemplateSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
