import type { RouteHandler } from '@hono/zod-openapi'
import type { getSurveyResponsesConversationUuidRoute } from '../routes'

export const getSurveyResponsesConversationUuidRouteHandler: RouteHandler<
  typeof getSurveyResponsesConversationUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}
