import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTransactionalSMSStatisticsAggregatedReportRoute,
  getTransactionalSMSStatisticsEventsRoute,
  getTransactionalSMSStatisticsReportsRoute,
  getTransactionalSMSTemplatesRoute,
  postTransactionalSMSSendRoute,
  postTransactionalSMSSmsRoute,
} from '../routes'

export const postTransactionalSMSSendRouteHandler: RouteHandler<
  typeof postTransactionalSMSSendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTransactionalSMSSmsRouteHandler: RouteHandler<
  typeof postTransactionalSMSSmsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTransactionalSMSStatisticsAggregatedReportRouteHandler: RouteHandler<
  typeof getTransactionalSMSStatisticsAggregatedReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTransactionalSMSStatisticsEventsRouteHandler: RouteHandler<
  typeof getTransactionalSMSStatisticsEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTransactionalSMSStatisticsReportsRouteHandler: RouteHandler<
  typeof getTransactionalSMSStatisticsReportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTransactionalSMSTemplatesRouteHandler: RouteHandler<
  typeof getTransactionalSMSTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
