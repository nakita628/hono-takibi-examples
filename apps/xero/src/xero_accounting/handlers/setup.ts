import type { RouteHandler } from '@hono/zod-openapi'
import type { postSetupRoute } from '../routes'

export const postSetupRouteHandler: RouteHandler<typeof postSetupRoute> = async (c) => {
  throw new Error('Not implemented')
}
