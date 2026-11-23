import type { RouteHandler } from '@hono/zod-openapi'
import type { getEvaluationsRoute } from '../routes'

export const getEvaluationsRouteHandler: RouteHandler<typeof getEvaluationsRoute> = async (c) => {
  throw new Error('Not implemented')
}
