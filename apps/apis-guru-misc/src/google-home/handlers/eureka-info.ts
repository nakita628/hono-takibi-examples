import type { RouteHandler } from '@hono/zod-openapi'
import type { getEurekaInfoRoute } from '../routes'

export const getEurekaInfoRouteHandler: RouteHandler<typeof getEurekaInfoRoute> = async (c) => {
  throw new Error('Not implemented')
}
