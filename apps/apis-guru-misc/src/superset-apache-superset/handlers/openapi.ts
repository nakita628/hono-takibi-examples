import type { RouteHandler } from '@hono/zod-openapi'
import type { getOpenapiVersionOpenapiRoute } from '../routes'

export const getOpenapiVersionOpenapiRouteHandler: RouteHandler<
  typeof getOpenapiVersionOpenapiRoute
> = async (c) => {
  throw new Error('Not implemented')
}
