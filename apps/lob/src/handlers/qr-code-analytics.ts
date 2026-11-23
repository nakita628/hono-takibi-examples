import type { RouteHandler } from '@hono/zod-openapi'
import type { getQrCodeAnalyticsRoute } from '../routes'

export const getQrCodeAnalyticsRouteHandler: RouteHandler<typeof getQrCodeAnalyticsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
