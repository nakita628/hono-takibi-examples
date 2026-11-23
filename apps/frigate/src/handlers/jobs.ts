import type { RouteHandler } from '@hono/zod-openapi'
import type { getJobsExportExportIdRoute, getJobsExportRoute } from '../routes'

export const getJobsExportRouteHandler: RouteHandler<typeof getJobsExportRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getJobsExportExportIdRouteHandler: RouteHandler<
  typeof getJobsExportExportIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
