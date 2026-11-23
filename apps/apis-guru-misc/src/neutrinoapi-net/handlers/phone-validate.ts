import type { RouteHandler } from '@hono/zod-openapi'
import type { getPhoneValidateRoute } from '../routes'

export const getPhoneValidateRouteHandler: RouteHandler<typeof getPhoneValidateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
