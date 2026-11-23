import type { RouteHandler } from '@hono/zod-openapi'
import type { getTelemetryRoute } from '../routes'

export const getTelemetryRouteHandler: RouteHandler<typeof getTelemetryRoute> = async (c) => {
  throw new Error('Not implemented')
}
