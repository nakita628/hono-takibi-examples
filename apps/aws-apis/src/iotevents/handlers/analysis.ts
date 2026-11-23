import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAnalysisDetectorModelsAnalysisIdResultsRoute,
  getAnalysisDetectorModelsAnalysisIdRoute,
  postAnalysisDetectorModelsIndexRoute,
} from '../routes'

export const getAnalysisDetectorModelsAnalysisIdRouteHandler: RouteHandler<
  typeof getAnalysisDetectorModelsAnalysisIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAnalysisDetectorModelsAnalysisIdResultsRouteHandler: RouteHandler<
  typeof getAnalysisDetectorModelsAnalysisIdResultsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAnalysisDetectorModelsIndexRouteHandler: RouteHandler<
  typeof postAnalysisDetectorModelsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
