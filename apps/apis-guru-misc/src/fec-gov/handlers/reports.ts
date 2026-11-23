import type { RouteHandler } from '@hono/zod-openapi'
import type { getReportsEntityTypeIndexRoute } from '../routes'

export const getReportsEntityTypeIndexRouteHandler: RouteHandler<
  typeof getReportsEntityTypeIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
