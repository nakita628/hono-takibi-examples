import type { RouteHandler } from '@hono/zod-openapi'
import type { getV2ActionsActionIdRoute, getV2ActionsRoute } from '../routes'

export const getV2ActionsRouteHandler: RouteHandler<typeof getV2ActionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2ActionsActionIdRouteHandler: RouteHandler<
  typeof getV2ActionsActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
