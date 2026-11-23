import type { RouteHandler } from '@hono/zod-openapi'
import type { getAdReportMetadataReportTypeRoute, getAdReportMetadataRoute } from '../routes'

export const getAdReportMetadataRouteHandler: RouteHandler<
  typeof getAdReportMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdReportMetadataReportTypeRouteHandler: RouteHandler<
  typeof getAdReportMetadataReportTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
