import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionGetSendQuotaRoute, postActionGetSendQuotaRoute } from '../routes'

export const getActionGetSendQuotaRouteHandler: RouteHandler<
  typeof getActionGetSendQuotaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetSendQuotaRouteHandler: RouteHandler<
  typeof postActionGetSendQuotaRoute
> = async (c) => {
  throw new Error('Not implemented')
}
