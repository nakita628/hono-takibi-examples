import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteReportIndexRoute,
  deleteReportPkRoute,
  getReportIndexRoute,
  getReportInfoRoute,
  getReportPkLogIndexRoute,
  getReportPkLogLogIdRoute,
  getReportPkRoute,
  getReportRelatedColumnNameRoute,
  postReportIndexRoute,
  putReportPkRoute,
} from '../routes'

export const deleteReportIndexRouteHandler: RouteHandler<typeof deleteReportIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getReportIndexRouteHandler: RouteHandler<typeof getReportIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postReportIndexRouteHandler: RouteHandler<typeof postReportIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportInfoRouteHandler: RouteHandler<typeof getReportInfoRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportRelatedColumnNameRouteHandler: RouteHandler<
  typeof getReportRelatedColumnNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReportPkRouteHandler: RouteHandler<typeof deleteReportPkRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportPkRouteHandler: RouteHandler<typeof getReportPkRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putReportPkRouteHandler: RouteHandler<typeof putReportPkRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportPkLogIndexRouteHandler: RouteHandler<
  typeof getReportPkLogIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportPkLogLogIdRouteHandler: RouteHandler<
  typeof getReportPkLogLogIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
