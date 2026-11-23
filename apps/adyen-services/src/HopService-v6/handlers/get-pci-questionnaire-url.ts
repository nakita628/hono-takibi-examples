import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetPciQuestionnaireUrlRoute } from '../routes'

export const postGetPciQuestionnaireUrlRouteHandler: RouteHandler<
  typeof postGetPciQuestionnaireUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}
