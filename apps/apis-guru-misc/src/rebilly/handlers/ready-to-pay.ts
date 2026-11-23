import type { RouteHandler } from '@hono/zod-openapi'
import type { postReadyToPayRoute } from '../routes'

export const postReadyToPayRouteHandler: RouteHandler<typeof postReadyToPayRoute> = async (c) => {
  throw new Error('Not implemented')
}
