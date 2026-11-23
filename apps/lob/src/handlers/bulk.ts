import type { RouteHandler } from '@hono/zod-openapi'
import type { postBulkIntlVerificationsRoute, postBulkUsVerificationsRoute } from '../routes'

export const postBulkUsVerificationsRouteHandler: RouteHandler<
  typeof postBulkUsVerificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postBulkIntlVerificationsRouteHandler: RouteHandler<
  typeof postBulkIntlVerificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
