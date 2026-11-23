import type { RouteHandler } from '@hono/zod-openapi'
import type { getCommoditiesRoute } from '../routes'

export const getCommoditiesRouteHandler: RouteHandler<typeof getCommoditiesRoute> = async (c) => {
  throw new Error('Not implemented')
}
