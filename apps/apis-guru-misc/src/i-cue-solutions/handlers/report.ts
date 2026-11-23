import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getReportPerformancePlanningLevelIdRoute,
  getReportPerformanceSkuRationalizationPlanningLevelIdRoute,
  getReportPlanningLevelOrganizationRoute,
  getReportPlanningLevelUserRoute,
  getReportUserRoute,
} from '../routes'

export const getReportPerformanceSkuRationalizationPlanningLevelIdRouteHandler: RouteHandler<
  typeof getReportPerformanceSkuRationalizationPlanningLevelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportPerformancePlanningLevelIdRouteHandler: RouteHandler<
  typeof getReportPerformancePlanningLevelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportPlanningLevelOrganizationRouteHandler: RouteHandler<
  typeof getReportPlanningLevelOrganizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportPlanningLevelUserRouteHandler: RouteHandler<
  typeof getReportPlanningLevelUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportUserRouteHandler: RouteHandler<typeof getReportUserRoute> = async (c) => {
  throw new Error('Not implemented')
}
