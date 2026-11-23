import type { RouteHandler } from '@hono/zod-openapi'
import type { postUpdateFlowRoute } from '../routes'

export const postUpdateFlowRouteHandler: RouteHandler<typeof postUpdateFlowRoute> = async (c) => {
  throw new Error('Not implemented')
}
