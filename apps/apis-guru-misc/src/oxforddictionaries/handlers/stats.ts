import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getStatsFrequencyNgramsSourceLangCorpusNgramSizeIndexRoute,
  getStatsFrequencyWordSourceLangIndexRoute,
  getStatsFrequencyWordsSourceLangIndexRoute,
} from '../routes'

export const getStatsFrequencyNgramsSourceLangCorpusNgramSizeIndexRouteHandler: RouteHandler<
  typeof getStatsFrequencyNgramsSourceLangCorpusNgramSizeIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStatsFrequencyWordSourceLangIndexRouteHandler: RouteHandler<
  typeof getStatsFrequencyWordSourceLangIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStatsFrequencyWordsSourceLangIndexRouteHandler: RouteHandler<
  typeof getStatsFrequencyWordsSourceLangIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
