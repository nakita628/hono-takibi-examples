import type { RouteHandler } from '@hono/zod-openapi'
import type { getIndustriesRoute } from '../routes'

export const getIndustriesRouteHandler: RouteHandler<typeof getIndustriesRoute> = async (c) => {
  throw new Error('Not implemented')
}
