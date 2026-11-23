import type { RouteHandler } from '@hono/zod-openapi'
import type { getMetadataReportTypeColumnsRoute } from '../routes'

export const getMetadataReportTypeColumnsRouteHandler: RouteHandler<
  typeof getMetadataReportTypeColumnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
