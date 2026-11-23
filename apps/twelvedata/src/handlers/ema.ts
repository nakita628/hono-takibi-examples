import type { RouteHandler } from '@hono/zod-openapi'
import type { getEmaRoute } from '../routes'

export const getEmaRouteHandler: RouteHandler<typeof getEmaRoute> = async (c) => {
  throw new Error('Not implemented')
}
