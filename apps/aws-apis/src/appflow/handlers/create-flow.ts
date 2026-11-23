import type { RouteHandler } from '@hono/zod-openapi'
import type { postCreateFlowRoute } from '../routes'

export const postCreateFlowRouteHandler: RouteHandler<typeof postCreateFlowRoute> = async (c) => {
  throw new Error('Not implemented')
}
