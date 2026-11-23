import type { RouteHandler } from '@hono/zod-openapi'
import type { getWmaRoute } from '../routes'

export const getWmaRouteHandler: RouteHandler<typeof getWmaRoute> = async (c) => {
  throw new Error('Not implemented')
}
