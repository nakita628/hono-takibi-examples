import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteReportsReportIdRoute,
  getReportsReportIdRoute,
  getReportsRoute,
  patchReportsReportIdRoute,
  postReportsGenerateRoute,
  postReportsReportIdGenerateRoute,
  postReportsRoute,
} from '../routes'

export const getReportsRouteHandler: RouteHandler<typeof getReportsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postReportsRouteHandler: RouteHandler<typeof postReportsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postReportsGenerateRouteHandler: RouteHandler<
  typeof postReportsGenerateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReportsReportIdRouteHandler: RouteHandler<
  typeof deleteReportsReportIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsReportIdRouteHandler: RouteHandler<typeof getReportsReportIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchReportsReportIdRouteHandler: RouteHandler<
  typeof patchReportsReportIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReportsReportIdGenerateRouteHandler: RouteHandler<
  typeof postReportsReportIdGenerateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
