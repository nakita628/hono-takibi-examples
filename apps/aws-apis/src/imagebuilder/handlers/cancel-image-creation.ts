import type { RouteHandler } from '@hono/zod-openapi'
import type { putCancelImageCreationRoute } from '../routes'

export const putCancelImageCreationRouteHandler: RouteHandler<
  typeof putCancelImageCreationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
