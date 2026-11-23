import type { RouteHandler } from '@hono/zod-openapi'
import type { getSdkDownloadTypeRoute } from '../routes'

export const getSdkDownloadTypeRouteHandler: RouteHandler<typeof getSdkDownloadTypeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
