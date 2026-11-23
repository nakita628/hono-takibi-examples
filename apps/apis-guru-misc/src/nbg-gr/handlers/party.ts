import type { RouteHandler } from '@hono/zod-openapi'
import type { getPartyRoute } from '../routes'

export const getPartyRouteHandler: RouteHandler<typeof getPartyRoute> = async (c) => {
  throw new Error('Not implemented')
}
