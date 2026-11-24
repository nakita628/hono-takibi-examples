import type { RouteHandler } from '@hono/zod-openapi'
import type { getServiceInfoRoute } from '../routes'

export const getServiceInfoRouteHandler: RouteHandler<typeof getServiceInfoRoute> = async (c) => {
  throw new Error('Not implemented')
}
