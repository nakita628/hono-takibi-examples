import type { RouteHandler } from '@hono/zod-openapi'
import type { getPlansRoute } from '../routes'

export const getPlansRouteHandler: RouteHandler<typeof getPlansRoute> = async (c) => {
  throw new Error('Not implemented')
}
