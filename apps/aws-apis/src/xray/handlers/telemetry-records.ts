import type { RouteHandler } from '@hono/zod-openapi'
import type { postTelemetryRecordsRoute } from '../routes'

export const postTelemetryRecordsRouteHandler: RouteHandler<
  typeof postTelemetryRecordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
