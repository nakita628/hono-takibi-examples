import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPredictionsPredictionIdRoute,
  getPredictionsRoute,
  postPredictionsPredictionIdCancelRoute,
  postPredictionsRoute,
} from '../routes'

export const getPredictionsRouteHandler: RouteHandler<typeof getPredictionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPredictionsRouteHandler: RouteHandler<typeof postPredictionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPredictionsPredictionIdRouteHandler: RouteHandler<
  typeof getPredictionsPredictionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPredictionsPredictionIdCancelRouteHandler: RouteHandler<
  typeof postPredictionsPredictionIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}
