import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteAnomalyDetectorRoute,
  postActionDeleteAnomalyDetectorRoute,
} from '../routes'

export const getActionDeleteAnomalyDetectorRouteHandler: RouteHandler<
  typeof getActionDeleteAnomalyDetectorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteAnomalyDetectorRouteHandler: RouteHandler<
  typeof postActionDeleteAnomalyDetectorRoute
> = async (c) => {
  throw new Error('Not implemented')
}
