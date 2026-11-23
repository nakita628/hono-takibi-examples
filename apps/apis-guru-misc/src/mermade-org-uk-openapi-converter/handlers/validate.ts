import type { RouteHandler } from '@hono/zod-openapi'
import type { getValidateRoute, postValidateRoute } from '../routes'

export const getValidateRouteHandler: RouteHandler<typeof getValidateRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postValidateRouteHandler: RouteHandler<typeof postValidateRoute> = async (c) => {
  throw new Error('Not implemented')
}
