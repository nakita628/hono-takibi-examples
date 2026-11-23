import type { RouteHandler } from '@hono/zod-openapi'
import type { getCallsInfoRoute } from '../routes'

export const getCallsInfoRouteHandler: RouteHandler<typeof getCallsInfoRoute> = async (c) => {
  throw new Error('Not implemented')
}
