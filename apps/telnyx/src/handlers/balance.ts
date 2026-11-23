import type { RouteHandler } from '@hono/zod-openapi'
import type { getBalanceRoute } from '../routes'

export const getBalanceRouteHandler: RouteHandler<typeof getBalanceRoute> = async (c) => {
  throw new Error('Not implemented')
}
