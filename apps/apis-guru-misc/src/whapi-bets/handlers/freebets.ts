import type { RouteHandler } from '@hono/zod-openapi'
import type { getFreebetsRoute } from '../routes'

export const getFreebetsRouteHandler: RouteHandler<typeof getFreebetsRoute> = async (c) => {
  throw new Error('Not implemented')
}
