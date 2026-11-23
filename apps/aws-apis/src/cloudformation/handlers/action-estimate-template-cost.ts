import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionEstimateTemplateCostRoute,
  postActionEstimateTemplateCostRoute,
} from '../routes'

export const getActionEstimateTemplateCostRouteHandler: RouteHandler<
  typeof getActionEstimateTemplateCostRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionEstimateTemplateCostRouteHandler: RouteHandler<
  typeof postActionEstimateTemplateCostRoute
> = async (c) => {
  throw new Error('Not implemented')
}
