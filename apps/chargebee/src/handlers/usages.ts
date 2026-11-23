import type { RouteHandler } from '@hono/zod-openapi'
import type { getUsagesRoute, postUsagesPdfRoute } from '../routes'

export const postUsagesPdfRouteHandler: RouteHandler<typeof postUsagesPdfRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsagesRouteHandler: RouteHandler<typeof getUsagesRoute> = async (c) => {
  throw new Error('Not implemented')
}
