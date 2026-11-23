import type { RouteHandler } from '@hono/zod-openapi'
import type { getSurveyDefinitionsSurveyIdRoute } from '../routes'

export const getSurveyDefinitionsSurveyIdRouteHandler: RouteHandler<
  typeof getSurveyDefinitionsSurveyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
