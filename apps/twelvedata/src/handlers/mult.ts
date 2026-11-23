import type { RouteHandler } from '@hono/zod-openapi'
import type { getMultRoute } from '../routes'

export const getMultRouteHandler: RouteHandler<typeof getMultRoute> = async (c) => {
  throw new Error('Not implemented')
}
