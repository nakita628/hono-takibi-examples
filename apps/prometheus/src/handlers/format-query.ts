import type { RouteHandler } from '@hono/zod-openapi'
import type { getFormatQueryRoute, postFormatQueryRoute } from '../routes'

export const getFormatQueryRouteHandler: RouteHandler<typeof getFormatQueryRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postFormatQueryRouteHandler: RouteHandler<typeof postFormatQueryRoute> = async (c) => {
  throw new Error('Not implemented')
}
