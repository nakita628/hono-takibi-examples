import type { RouteHandler } from '@hono/zod-openapi'
import type { getQuestionPageNameMediaTypeExtensionRoute } from '../routes'

export const getQuestionPageNameMediaTypeExtensionRouteHandler: RouteHandler<
  typeof getQuestionPageNameMediaTypeExtensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
