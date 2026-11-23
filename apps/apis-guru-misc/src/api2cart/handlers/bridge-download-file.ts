import type { RouteHandler } from '@hono/zod-openapi'
import type { getBridgeDownloadFileRoute } from '../routes'

export const getBridgeDownloadFileRouteHandler: RouteHandler<
  typeof getBridgeDownloadFileRoute
> = async (c) => {
  throw new Error('Not implemented')
}
