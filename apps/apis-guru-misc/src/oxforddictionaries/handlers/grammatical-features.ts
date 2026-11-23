import type { RouteHandler } from '@hono/zod-openapi'
import type { getGrammaticalFeaturesSourceLanguageRoute } from '../routes'

export const getGrammaticalFeaturesSourceLanguageRouteHandler: RouteHandler<
  typeof getGrammaticalFeaturesSourceLanguageRoute
> = async (c) => {
  throw new Error('Not implemented')
}
