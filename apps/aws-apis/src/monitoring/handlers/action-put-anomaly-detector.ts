import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionPutAnomalyDetectorRoute, postActionPutAnomalyDetectorRoute } from '../routes'

export const getActionPutAnomalyDetectorRouteHandler: RouteHandler<
  typeof getActionPutAnomalyDetectorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionPutAnomalyDetectorRouteHandler: RouteHandler<
  typeof postActionPutAnomalyDetectorRoute
> = async (c) => {
  throw new Error('Not implemented')
}
