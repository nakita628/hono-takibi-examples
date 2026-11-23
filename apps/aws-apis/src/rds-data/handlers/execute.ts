import type { RouteHandler } from '@hono/zod-openapi'
import type { postExecuteRoute } from '../routes'

export const postExecuteRouteHandler: RouteHandler<typeof postExecuteRoute> = async (c) => {
  throw new Error('Not implemented')
}
