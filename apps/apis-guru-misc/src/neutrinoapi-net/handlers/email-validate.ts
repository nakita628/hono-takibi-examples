import type { RouteHandler } from '@hono/zod-openapi'
import type { getEmailValidateRoute } from '../routes'

export const getEmailValidateRouteHandler: RouteHandler<typeof getEmailValidateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
