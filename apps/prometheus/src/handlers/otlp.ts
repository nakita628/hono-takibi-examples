import type { RouteHandler } from '@hono/zod-openapi'
import type { postOtlpV1MetricsRoute } from '../routes'

export const postOtlpV1MetricsRouteHandler: RouteHandler<typeof postOtlpV1MetricsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
