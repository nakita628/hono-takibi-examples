import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getVocabularyInstanceIdVocabularyIdRoute,
  postVocabularyInstanceIdRoute,
} from '../routes'

export const postVocabularyInstanceIdRouteHandler: RouteHandler<
  typeof postVocabularyInstanceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getVocabularyInstanceIdVocabularyIdRouteHandler: RouteHandler<
  typeof getVocabularyInstanceIdVocabularyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
