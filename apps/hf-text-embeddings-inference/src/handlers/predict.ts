import type { RouteHandler } from '@hono/zod-openapi'
import type { postPredictRoute } from '../routes'

export const postPredictRouteHandler: RouteHandler<typeof postPredictRoute> = async (c) => {
  throw new Error('Not implemented')
}
