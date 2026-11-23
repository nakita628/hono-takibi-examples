import type { RouteHandler } from '@hono/zod-openapi'
import type { getValidateRoute } from '../routes'

export const getValidateRouteHandler: RouteHandler<typeof getValidateRoute> = async (c) => {
  throw new Error('Not implemented')
}
