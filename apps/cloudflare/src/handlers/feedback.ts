import type { RouteHandler } from '@hono/zod-openapi'
import type { getFeedbackDiagnosisRoute, postFeedbackSendRoute } from '../routes'

export const getFeedbackDiagnosisRouteHandler: RouteHandler<
  typeof getFeedbackDiagnosisRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postFeedbackSendRouteHandler: RouteHandler<typeof postFeedbackSendRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
