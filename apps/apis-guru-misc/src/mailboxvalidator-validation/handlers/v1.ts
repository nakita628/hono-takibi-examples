import type { RouteHandler } from '@hono/zod-openapi'
import type { getV1ValidationSingleRoute } from '../routes'

export const getV1ValidationSingleRouteHandler: RouteHandler<
  typeof getV1ValidationSingleRoute
> = async (c) => {
  throw new Error('Not implemented')
}
