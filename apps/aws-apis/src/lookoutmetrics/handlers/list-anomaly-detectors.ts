import type { RouteHandler } from '@hono/zod-openapi'
import type { postListAnomalyDetectorsRoute } from '../routes'

export const postListAnomalyDetectorsRouteHandler: RouteHandler<
  typeof postListAnomalyDetectorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
