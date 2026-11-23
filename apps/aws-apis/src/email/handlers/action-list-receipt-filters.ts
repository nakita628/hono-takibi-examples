import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionListReceiptFiltersRoute, postActionListReceiptFiltersRoute } from '../routes'

export const getActionListReceiptFiltersRouteHandler: RouteHandler<
  typeof getActionListReceiptFiltersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListReceiptFiltersRouteHandler: RouteHandler<
  typeof postActionListReceiptFiltersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
