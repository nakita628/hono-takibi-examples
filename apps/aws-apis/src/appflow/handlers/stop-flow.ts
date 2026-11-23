import type { RouteHandler } from '@hono/zod-openapi'
import type { postStopFlowRoute } from '../routes'

export const postStopFlowRouteHandler: RouteHandler<typeof postStopFlowRoute> = async (c) => {
  throw new Error('Not implemented')
}
