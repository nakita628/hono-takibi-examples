import type { RouteHandler } from '@hono/zod-openapi'
import type { postEnableserviceRoute } from '../routes'

export const postEnableserviceRouteHandler: RouteHandler<typeof postEnableserviceRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
