import type { RouteHandler } from '@hono/zod-openapi'
import type { postStartFlowRoute } from '../routes'

export const postStartFlowRouteHandler: RouteHandler<typeof postStartFlowRoute> = async (c) => {
  throw new Error('Not implemented')
}
