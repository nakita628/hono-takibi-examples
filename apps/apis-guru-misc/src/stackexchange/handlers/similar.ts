import type { RouteHandler } from '@hono/zod-openapi'
import type { getSimilarRoute } from '../routes'

export const getSimilarRouteHandler: RouteHandler<typeof getSimilarRoute> = async (c) => {
  throw new Error('Not implemented')
}
