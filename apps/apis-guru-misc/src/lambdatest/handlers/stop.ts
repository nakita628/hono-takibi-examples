import type { RouteHandler } from '@hono/zod-openapi'
import type { putStopTestIdRoute } from '../routes'

export const putStopTestIdRouteHandler: RouteHandler<typeof putStopTestIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
