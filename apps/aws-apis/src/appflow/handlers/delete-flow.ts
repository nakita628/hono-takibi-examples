import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeleteFlowRoute } from '../routes'

export const postDeleteFlowRouteHandler: RouteHandler<typeof postDeleteFlowRoute> = async (c) => {
  throw new Error('Not implemented')
}
