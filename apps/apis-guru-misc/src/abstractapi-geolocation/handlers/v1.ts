import type { RouteHandler } from '@hono/zod-openapi'
import type { getV1IndexRoute } from '../routes'

export const getV1IndexRouteHandler: RouteHandler<typeof getV1IndexRoute> = async (c) => {
  throw new Error('Not implemented')
}
