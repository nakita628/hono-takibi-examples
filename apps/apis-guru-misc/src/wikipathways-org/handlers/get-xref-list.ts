import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetXrefListRoute } from '../routes'

export const getGetXrefListRouteHandler: RouteHandler<typeof getGetXrefListRoute> = async (c) => {
  throw new Error('Not implemented')
}
