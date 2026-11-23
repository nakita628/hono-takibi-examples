import type { RouteHandler } from '@hono/zod-openapi'
import type { getApoRoute } from '../routes'

export const getApoRouteHandler: RouteHandler<typeof getApoRoute> = async (c) => {
  throw new Error('Not implemented')
}
