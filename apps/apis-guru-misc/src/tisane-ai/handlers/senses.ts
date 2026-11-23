import type { RouteHandler } from '@hono/zod-openapi'
import type { getSensesRoute } from '../routes'

export const getSensesRouteHandler: RouteHandler<typeof getSensesRoute> = async (c) => {
  throw new Error('Not implemented')
}
