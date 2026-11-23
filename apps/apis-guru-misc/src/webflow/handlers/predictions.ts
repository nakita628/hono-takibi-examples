import type { RouteHandler } from '@hono/zod-openapi'
import type { getPredictionsRoute, optionsPredictionsRoute, postPredictionsRoute } from '../routes'

export const getPredictionsRouteHandler: RouteHandler<typeof getPredictionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsPredictionsRouteHandler: RouteHandler<typeof optionsPredictionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postPredictionsRouteHandler: RouteHandler<typeof postPredictionsRoute> = async (c) => {
  throw new Error('Not implemented')
}
