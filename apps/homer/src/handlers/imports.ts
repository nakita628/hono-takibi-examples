import type { RouteHandler } from '@hono/zod-openapi'
import type { postImportsPcapRoute } from '../routes'

export const postImportsPcapRouteHandler: RouteHandler<typeof postImportsPcapRoute> = async (c) => {
  throw new Error('Not implemented')
}
