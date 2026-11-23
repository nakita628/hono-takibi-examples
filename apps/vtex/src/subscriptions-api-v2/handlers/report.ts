import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getReportReportStatusReportIdRoute,
  getReportSubscriptionsByDateRoute,
  getReportSubscriptionsByStatusRoute,
  getReportSubscriptionsOrderByDateRoute,
  getReportSubscriptionsScheduledRoute,
  getReportSubscriptionsUpdatedRoute,
} from '../routes'

export const getReportReportStatusReportIdRouteHandler: RouteHandler<
  typeof getReportReportStatusReportIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportSubscriptionsByDateRouteHandler: RouteHandler<
  typeof getReportSubscriptionsByDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportSubscriptionsByStatusRouteHandler: RouteHandler<
  typeof getReportSubscriptionsByStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportSubscriptionsOrderByDateRouteHandler: RouteHandler<
  typeof getReportSubscriptionsOrderByDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportSubscriptionsScheduledRouteHandler: RouteHandler<
  typeof getReportSubscriptionsScheduledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportSubscriptionsUpdatedRouteHandler: RouteHandler<
  typeof getReportSubscriptionsUpdatedRoute
> = async (c) => {
  throw new Error('Not implemented')
}
