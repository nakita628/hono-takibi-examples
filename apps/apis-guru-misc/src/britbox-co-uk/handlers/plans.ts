import type { RouteHandler } from '@hono/zod-openapi'
import type { getPlansIdRoute } from '../routes'

export const getPlansIdRouteHandler: RouteHandler<typeof getPlansIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
