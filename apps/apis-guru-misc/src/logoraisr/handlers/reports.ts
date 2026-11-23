import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getReportsIndexRoute,
  getReportsReportNumberIndexRoute,
  postReportsIndexRoute,
} from '../routes'

export const getReportsIndexRouteHandler: RouteHandler<typeof getReportsIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postReportsIndexRouteHandler: RouteHandler<typeof postReportsIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getReportsReportNumberIndexRouteHandler: RouteHandler<
  typeof getReportsReportNumberIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
