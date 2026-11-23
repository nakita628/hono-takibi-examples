import type { RouteHandler } from '@hono/zod-openapi'
import type { getCurrenciesRoute } from '../routes'

export const getCurrenciesRouteHandler: RouteHandler<typeof getCurrenciesRoute> = async (c) => {
  throw new Error('Not implemented')
}
