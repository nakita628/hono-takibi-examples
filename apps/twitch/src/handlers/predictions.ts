import type { RouteHandler } from '@hono/zod-openapi'
import type { getPredictionsRoute, patchPredictionsRoute, postPredictionsRoute } from '../routes'

export const getPredictionsRouteHandler: RouteHandler<typeof getPredictionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPredictionsRouteHandler: RouteHandler<typeof postPredictionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPredictionsRouteHandler: RouteHandler<typeof patchPredictionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
