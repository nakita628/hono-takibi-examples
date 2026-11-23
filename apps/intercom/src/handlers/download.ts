import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDownloadContentDataJobIdentifierRoute,
  getDownloadReportingDataJobIdentifierRoute,
} from '../routes'

export const getDownloadReportingDataJobIdentifierRouteHandler: RouteHandler<
  typeof getDownloadReportingDataJobIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDownloadContentDataJobIdentifierRouteHandler: RouteHandler<
  typeof getDownloadContentDataJobIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}
