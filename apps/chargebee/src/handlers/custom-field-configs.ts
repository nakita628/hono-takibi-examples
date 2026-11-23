import type { RouteHandler } from '@hono/zod-openapi'
import type { getCustomFieldConfigsRetrieveRoute, getCustomFieldConfigsRoute } from '../routes'

export const getCustomFieldConfigsRetrieveRouteHandler: RouteHandler<
  typeof getCustomFieldConfigsRetrieveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCustomFieldConfigsRouteHandler: RouteHandler<
  typeof getCustomFieldConfigsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
