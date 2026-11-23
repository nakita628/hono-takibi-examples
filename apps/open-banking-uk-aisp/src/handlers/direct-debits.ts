import type { RouteHandler } from '@hono/zod-openapi'
import type { getDirectDebitsRoute } from '../routes'

export const getDirectDebitsRouteHandler: RouteHandler<typeof getDirectDebitsRoute> = async (c) => {
  throw new Error('Not implemented')
}
