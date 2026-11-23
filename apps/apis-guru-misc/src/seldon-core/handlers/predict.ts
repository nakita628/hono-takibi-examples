import type { RouteHandler } from '@hono/zod-openapi'
import type { getPredictRoute, postPredictRoute } from '../routes'

export const getPredictRouteHandler: RouteHandler<typeof getPredictRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPredictRouteHandler: RouteHandler<typeof postPredictRoute> = async (c) => {
  throw new Error('Not implemented')
}
