import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1JobsJobIdRoute,
  getV1JobsJobIdReportsReportIdRoute,
  getV1JobsJobIdReportsRoute,
  getV1JobsJobIdRoute,
  getV1JobsRoute,
  getV1MediaResourceNameRoute,
  getV1ReportTypesRoute,
  postV1JobsRoute,
} from '../routes'

export const getV1JobsRouteHandler: RouteHandler<typeof getV1JobsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1JobsRouteHandler: RouteHandler<typeof postV1JobsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1JobsJobIdRouteHandler: RouteHandler<typeof deleteV1JobsJobIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1JobsJobIdRouteHandler: RouteHandler<typeof getV1JobsJobIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1JobsJobIdReportsRouteHandler: RouteHandler<
  typeof getV1JobsJobIdReportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1JobsJobIdReportsReportIdRouteHandler: RouteHandler<
  typeof getV1JobsJobIdReportsReportIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1MediaResourceNameRouteHandler: RouteHandler<
  typeof getV1MediaResourceNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReportTypesRouteHandler: RouteHandler<typeof getV1ReportTypesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
