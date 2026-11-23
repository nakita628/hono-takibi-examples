import type { RouteHandler } from '@hono/zod-openapi'
import type { getReadyzRoute } from '../routes'

export const getReadyzRouteHandler: RouteHandler<typeof getReadyzRoute> = async (c) => {
  throw new Error('Not implemented')
}
