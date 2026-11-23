import type { RouteHandler } from '@hono/zod-openapi'
import type { getAgeusdInfoRoute } from '../routes'

export const getAgeusdInfoRouteHandler: RouteHandler<typeof getAgeusdInfoRoute> = async (c) => {
  throw new Error('Not implemented')
}
