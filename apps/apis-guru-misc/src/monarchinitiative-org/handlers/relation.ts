import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getRelationUsageBetweenSubjectCategoryObjectCategoryRoute,
  getRelationUsageIndexRoute,
  getRelationUsagePivotLabelRoute,
  getRelationUsagePivotRoute,
} from '../routes'

export const getRelationUsageIndexRouteHandler: RouteHandler<
  typeof getRelationUsageIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRelationUsageBetweenSubjectCategoryObjectCategoryRouteHandler: RouteHandler<
  typeof getRelationUsageBetweenSubjectCategoryObjectCategoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRelationUsagePivotRouteHandler: RouteHandler<
  typeof getRelationUsagePivotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRelationUsagePivotLabelRouteHandler: RouteHandler<
  typeof getRelationUsagePivotLabelRoute
> = async (c) => {
  throw new Error('Not implemented')
}
