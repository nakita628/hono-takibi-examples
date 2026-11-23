import type { RouteHandler } from '@hono/zod-openapi'
import type { getCallbacksRoute } from '../routes'

export const getCallbacksRouteHandler: RouteHandler<typeof getCallbacksRoute> = async (c) => {
  throw new Error('Not implemented')
}
