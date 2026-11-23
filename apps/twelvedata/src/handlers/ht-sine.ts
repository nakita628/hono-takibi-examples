import type { RouteHandler } from '@hono/zod-openapi'
import type { getHtSineRoute } from '../routes'

export const getHtSineRouteHandler: RouteHandler<typeof getHtSineRoute> = async (c) => {
  throw new Error('Not implemented')
}
