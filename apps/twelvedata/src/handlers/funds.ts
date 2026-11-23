import type { RouteHandler } from '@hono/zod-openapi'
import type { getFundsRoute } from '../routes'

export const getFundsRouteHandler: RouteHandler<typeof getFundsRoute> = async (c) => {
  throw new Error('Not implemented')
}
