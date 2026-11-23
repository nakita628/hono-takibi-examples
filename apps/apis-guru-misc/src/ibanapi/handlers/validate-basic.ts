import type { RouteHandler } from '@hono/zod-openapi'
import type { getValidateBasicRoute } from '../routes'

export const getValidateBasicRouteHandler: RouteHandler<typeof getValidateBasicRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
