import type { RouteHandler } from '@hono/zod-openapi'
import type { getRemoteInfoRoute } from '../routes'

export const getRemoteInfoRouteHandler: RouteHandler<typeof getRemoteInfoRoute> = async (c) => {
  throw new Error('Not implemented')
}
