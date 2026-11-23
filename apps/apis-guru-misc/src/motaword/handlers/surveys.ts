import type { RouteHandler } from '@hono/zod-openapi'
import type { getSurveysScopeTypeRoute, postSurveysScopeTypeRoute } from '../routes'

export const getSurveysScopeTypeRouteHandler: RouteHandler<
  typeof getSurveysScopeTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSurveysScopeTypeRouteHandler: RouteHandler<
  typeof postSurveysScopeTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
