import type { RouteHandler } from '@hono/zod-openapi'
import type { getSupportedTimezonesRoute } from '../routes'

export const getSupportedTimezonesRouteHandler: RouteHandler<
  typeof getSupportedTimezonesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
