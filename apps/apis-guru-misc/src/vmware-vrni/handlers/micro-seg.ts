import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postMicroSegRecommendedRulesNsxRoute,
  postMicroSegRecommendedRulesRoute,
} from '../routes'

export const postMicroSegRecommendedRulesRouteHandler: RouteHandler<
  typeof postMicroSegRecommendedRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMicroSegRecommendedRulesNsxRouteHandler: RouteHandler<
  typeof postMicroSegRecommendedRulesNsxRoute
> = async (c) => {
  throw new Error('Not implemented')
}
