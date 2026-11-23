import type { RouteHandler } from '@hono/zod-openapi'
import type { postDocumentsAnswerQuestionRoute } from '../routes'

export const postDocumentsAnswerQuestionRouteHandler: RouteHandler<
  typeof postDocumentsAnswerQuestionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
