import type { RouteHandler } from '@hono/zod-openapi'
import type { postSharesListRoute } from '../routes'

export const postSharesListRouteHandler: RouteHandler<typeof postSharesListRoute> = async (c) => {
  throw new Error('Not implemented')
}
