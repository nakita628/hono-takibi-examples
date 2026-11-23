import type { RouteHandler } from '@hono/zod-openapi'
import type { postOutlierRoute } from '../routes'

export const postOutlierRouteHandler: RouteHandler<typeof postOutlierRoute> = async (c) => {
  throw new Error('Not implemented')
}
