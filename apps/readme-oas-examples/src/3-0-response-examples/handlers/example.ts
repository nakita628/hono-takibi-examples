import type { RouteHandler } from '@hono/zod-openapi'
import type { getExampleRoute } from '../routes'

export const getExampleRouteHandler: RouteHandler<typeof getExampleRoute> = async (c) => {
  throw new Error('Not implemented')
}
