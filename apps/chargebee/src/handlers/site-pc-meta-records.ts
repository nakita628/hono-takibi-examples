import type { RouteHandler } from '@hono/zod-openapi'
import type { getSitePcMetaRecordsRoute } from '../routes'

export const getSitePcMetaRecordsRouteHandler: RouteHandler<
  typeof getSitePcMetaRecordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
