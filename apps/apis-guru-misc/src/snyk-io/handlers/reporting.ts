import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postReportingCountsIssuesLatestRoute,
  postReportingCountsIssuesRoute,
  postReportingCountsProjectsLatestRoute,
  postReportingCountsProjectsRoute,
  postReportingCountsTestsRoute,
  postReportingIssuesIndexRoute,
  postReportingIssuesLatestRoute,
} from '../routes'

export const postReportingCountsIssuesRouteHandler: RouteHandler<
  typeof postReportingCountsIssuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReportingCountsIssuesLatestRouteHandler: RouteHandler<
  typeof postReportingCountsIssuesLatestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReportingCountsProjectsRouteHandler: RouteHandler<
  typeof postReportingCountsProjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReportingCountsProjectsLatestRouteHandler: RouteHandler<
  typeof postReportingCountsProjectsLatestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReportingCountsTestsRouteHandler: RouteHandler<
  typeof postReportingCountsTestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReportingIssuesIndexRouteHandler: RouteHandler<
  typeof postReportingIssuesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReportingIssuesLatestRouteHandler: RouteHandler<
  typeof postReportingIssuesLatestRoute
> = async (c) => {
  throw new Error('Not implemented')
}
