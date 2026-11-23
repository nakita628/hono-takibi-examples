import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDomainsSourceDomainsLanguageTargetDomainsLanguageRoute,
  getDomainsSourceLanguageRoute,
  getEntriesSourceLanguageWordIdSentencesRoute,
  getEntriesSourceLangWordIdAntonymsRoute,
  getEntriesSourceLangWordIdFiltersRoute,
  getEntriesSourceLangWordIdRegionsRegionRoute,
  getEntriesSourceLangWordIdRoute,
  getEntriesSourceLangWordIdSynonymsAntonymsRoute,
  getEntriesSourceLangWordIdSynonymsRoute,
  getEntriesSourceTranslationLanguageWordIdTranslationsTargetTranslationLanguageRoute,
  getFiltersEndpointRoute,
  getFiltersRoute,
  getGrammaticalFeaturesSourceLanguageRoute,
  getInflectionsSourceLangWordIdFiltersRoute,
  getLanguagesRoute,
  getLexicalcategoriesLanguageRoute,
  getRegionsSourceLanguageRoute,
  getRegistersSourceLanguageRoute,
  getRegistersSourceRegisterLanguageTargetRegisterLanguageRoute,
  getSearchSourceLangRoute,
  getSearchSourceSearchLanguageTranslationsTargetSearchLanguageRoute,
  getStatsFrequencyNgramsSourceLangCorpusNgramSizeIndexRoute,
  getStatsFrequencyWordSourceLangIndexRoute,
  getStatsFrequencyWordsSourceLangIndexRoute,
  getWordlistSourceLangFiltersAdvancedRoute,
  getWordlistSourceLangFiltersBasicRoute,
} from './routes'
import {
  getDomainsSourceDomainsLanguageTargetDomainsLanguageRouteHandler,
  getDomainsSourceLanguageRouteHandler,
  getEntriesSourceLanguageWordIdSentencesRouteHandler,
  getEntriesSourceLangWordIdAntonymsRouteHandler,
  getEntriesSourceLangWordIdFiltersRouteHandler,
  getEntriesSourceLangWordIdRegionsRegionRouteHandler,
  getEntriesSourceLangWordIdRouteHandler,
  getEntriesSourceLangWordIdSynonymsAntonymsRouteHandler,
  getEntriesSourceLangWordIdSynonymsRouteHandler,
  getEntriesSourceTranslationLanguageWordIdTranslationsTargetTranslationLanguageRouteHandler,
  getFiltersEndpointRouteHandler,
  getFiltersRouteHandler,
  getGrammaticalFeaturesSourceLanguageRouteHandler,
  getInflectionsSourceLangWordIdFiltersRouteHandler,
  getLanguagesRouteHandler,
  getLexicalcategoriesLanguageRouteHandler,
  getRegionsSourceLanguageRouteHandler,
  getRegistersSourceLanguageRouteHandler,
  getRegistersSourceRegisterLanguageTargetRegisterLanguageRouteHandler,
  getSearchSourceLangRouteHandler,
  getSearchSourceSearchLanguageTranslationsTargetSearchLanguageRouteHandler,
  getStatsFrequencyNgramsSourceLangCorpusNgramSizeIndexRouteHandler,
  getStatsFrequencyWordSourceLangIndexRouteHandler,
  getStatsFrequencyWordsSourceLangIndexRouteHandler,
  getWordlistSourceLangFiltersAdvancedRouteHandler,
  getWordlistSourceLangFiltersBasicRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getDomainsSourceDomainsLanguageTargetDomainsLanguageRoute,
    getDomainsSourceDomainsLanguageTargetDomainsLanguageRouteHandler,
  )
  .openapi(getDomainsSourceLanguageRoute, getDomainsSourceLanguageRouteHandler)
  .openapi(
    getEntriesSourceLanguageWordIdSentencesRoute,
    getEntriesSourceLanguageWordIdSentencesRouteHandler,
  )
  .openapi(getEntriesSourceLangWordIdRoute, getEntriesSourceLangWordIdRouteHandler)
  .openapi(getEntriesSourceLangWordIdAntonymsRoute, getEntriesSourceLangWordIdAntonymsRouteHandler)
  .openapi(
    getEntriesSourceLangWordIdRegionsRegionRoute,
    getEntriesSourceLangWordIdRegionsRegionRouteHandler,
  )
  .openapi(getEntriesSourceLangWordIdSynonymsRoute, getEntriesSourceLangWordIdSynonymsRouteHandler)
  .openapi(
    getEntriesSourceLangWordIdSynonymsAntonymsRoute,
    getEntriesSourceLangWordIdSynonymsAntonymsRouteHandler,
  )
  .openapi(getEntriesSourceLangWordIdFiltersRoute, getEntriesSourceLangWordIdFiltersRouteHandler)
  .openapi(
    getEntriesSourceTranslationLanguageWordIdTranslationsTargetTranslationLanguageRoute,
    getEntriesSourceTranslationLanguageWordIdTranslationsTargetTranslationLanguageRouteHandler,
  )
  .openapi(getFiltersRoute, getFiltersRouteHandler)
  .openapi(getFiltersEndpointRoute, getFiltersEndpointRouteHandler)
  .openapi(
    getGrammaticalFeaturesSourceLanguageRoute,
    getGrammaticalFeaturesSourceLanguageRouteHandler,
  )
  .openapi(
    getInflectionsSourceLangWordIdFiltersRoute,
    getInflectionsSourceLangWordIdFiltersRouteHandler,
  )
  .openapi(getLanguagesRoute, getLanguagesRouteHandler)
  .openapi(getLexicalcategoriesLanguageRoute, getLexicalcategoriesLanguageRouteHandler)
  .openapi(getRegionsSourceLanguageRoute, getRegionsSourceLanguageRouteHandler)
  .openapi(getRegistersSourceLanguageRoute, getRegistersSourceLanguageRouteHandler)
  .openapi(
    getRegistersSourceRegisterLanguageTargetRegisterLanguageRoute,
    getRegistersSourceRegisterLanguageTargetRegisterLanguageRouteHandler,
  )
  .openapi(getSearchSourceLangRoute, getSearchSourceLangRouteHandler)
  .openapi(
    getSearchSourceSearchLanguageTranslationsTargetSearchLanguageRoute,
    getSearchSourceSearchLanguageTranslationsTargetSearchLanguageRouteHandler,
  )
  .openapi(
    getStatsFrequencyNgramsSourceLangCorpusNgramSizeIndexRoute,
    getStatsFrequencyNgramsSourceLangCorpusNgramSizeIndexRouteHandler,
  )
  .openapi(
    getStatsFrequencyWordSourceLangIndexRoute,
    getStatsFrequencyWordSourceLangIndexRouteHandler,
  )
  .openapi(
    getStatsFrequencyWordsSourceLangIndexRoute,
    getStatsFrequencyWordsSourceLangIndexRouteHandler,
  )
  .openapi(
    getWordlistSourceLangFiltersAdvancedRoute,
    getWordlistSourceLangFiltersAdvancedRouteHandler,
  )
  .openapi(getWordlistSourceLangFiltersBasicRoute, getWordlistSourceLangFiltersBasicRouteHandler)

export default app
