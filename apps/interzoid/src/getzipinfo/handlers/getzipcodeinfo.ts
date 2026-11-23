import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetzipcodeinfoRoute } from '../routes'

export const getGetzipcodeinfoRouteHandler: RouteHandler<typeof getGetzipcodeinfoRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
