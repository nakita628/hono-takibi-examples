import type { RouteHandler } from '@hono/zod-openapi'
import type { getIpBlocklistDownloadRoute } from '../routes'

export const getIpBlocklistDownloadRouteHandler: RouteHandler<
  typeof getIpBlocklistDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}
