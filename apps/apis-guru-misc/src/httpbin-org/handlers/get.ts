import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetRoute } from '../routes'

export const getGetRouteHandler: RouteHandler<typeof getGetRoute> = async (c) => {
  throw new Error('Not implemented')
}
