import type { RouteHandler } from '@hono/zod-openapi'
import type { getCashValidationRoute } from '../routes'

export const getCashValidationRouteHandler: RouteHandler<typeof getCashValidationRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
