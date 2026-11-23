import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2GlossariesGlossaryIdRoute,
  deleteV3GlossariesGlossaryIdDictionariesRoute,
  deleteV3GlossariesGlossaryIdRoute,
  deleteV3SpokenTermsSpokenTermsIdRoute,
  deleteV3SpokenTermsSpokenTermsIdTermListsRoute,
  deleteV3StyleProfilesStyleProfileIdRoute,
  deleteV3StyleRulesStyleIdCustomInstructionsInstructionIdRoute,
  deleteV3StyleRulesStyleIdRoute,
  deleteV3TranslationMemoriesTranslationMemoryIdRoute,
  getV1JobsVoiceTranslateJobIdRoute,
  getV1QualityEvaluationsJobIdRoute,
  getV2AdminAnalyticsCustomTagsRoute,
  getV2AdminAnalyticsRoute,
  getV2AdminDeveloperKeysRoute,
  getV2GlossariesGlossaryIdEntriesRoute,
  getV2GlossariesGlossaryIdRoute,
  getV2GlossariesRoute,
  getV2GlossaryLanguagePairsRoute,
  getV2LanguagesRoute,
  getV2UsageRoute,
  getV3GlossariesGlossaryIdEntriesRoute,
  getV3GlossariesGlossaryIdRoute,
  getV3GlossariesRoute,
  getV3LanguagesResourcesRoute,
  getV3LanguagesRoute,
  getV3SpokenTermsRoute,
  getV3SpokenTermsSpokenTermsIdEntriesRoute,
  getV3SpokenTermsSpokenTermsIdRoute,
  getV3StyleProfilesRoute,
  getV3StyleProfilesStyleProfileIdRoute,
  getV3StyleRulesRoute,
  getV3StyleRulesStyleIdCustomInstructionsInstructionIdRoute,
  getV3StyleRulesStyleIdRoute,
  getV3TranslationMemoriesJobsJobIdRoute,
  getV3TranslationMemoriesRoute,
  getV3TranslationMemoriesTranslationMemoryIdRoute,
  getV3TranslationMemoriesTranslationMemoryIdSegmentsRoute,
  getV3VoiceRealtimeRoute,
  patchV3GlossariesGlossaryIdRoute,
  patchV3SpokenTermsSpokenTermsIdRoute,
  patchV3StyleProfilesStyleProfileIdRoute,
  patchV3StyleRulesStyleIdRoute,
  postV1JobsVoiceTranslateRoute,
  postV2AdminDeveloperKeysRoute,
  postV2DocumentDocumentIdResultRoute,
  postV2DocumentDocumentIdRoute,
  postV2DocumentRoute,
  postV2GlossariesRoute,
  postV2TranslateRoute,
  postV2WriteCorrectRoute,
  postV2WriteRephraseRoute,
  postV3GlossariesRoute,
  postV3SpokenTermsRoute,
  postV3StyleProfilesRoute,
  postV3StyleRulesRoute,
  postV3StyleRulesStyleIdCustomInstructionsRoute,
  postV3TranslationMemoriesImportRoute,
  postV3TranslationMemoriesTranslationMemoryIdExportRoute,
  postV3VoiceRealtimeRoute,
  putV2AdminDeveloperKeysDeactivateRoute,
  putV2AdminDeveloperKeysLabelRoute,
  putV2AdminDeveloperKeysLimitsRoute,
  putV3GlossariesGlossaryIdDictionariesRoute,
  putV3SpokenTermsSpokenTermsIdTermListsRoute,
  putV3StyleRulesStyleIdConfiguredRulesRoute,
  putV3StyleRulesStyleIdCustomInstructionsInstructionIdRoute,
} from './routes'
import {
  deleteV2GlossariesGlossaryIdRouteHandler,
  deleteV3GlossariesGlossaryIdDictionariesRouteHandler,
  deleteV3GlossariesGlossaryIdRouteHandler,
  deleteV3SpokenTermsSpokenTermsIdRouteHandler,
  deleteV3SpokenTermsSpokenTermsIdTermListsRouteHandler,
  deleteV3StyleProfilesStyleProfileIdRouteHandler,
  deleteV3StyleRulesStyleIdCustomInstructionsInstructionIdRouteHandler,
  deleteV3StyleRulesStyleIdRouteHandler,
  deleteV3TranslationMemoriesTranslationMemoryIdRouteHandler,
  getV1JobsVoiceTranslateJobIdRouteHandler,
  getV1QualityEvaluationsJobIdRouteHandler,
  getV2AdminAnalyticsCustomTagsRouteHandler,
  getV2AdminAnalyticsRouteHandler,
  getV2AdminDeveloperKeysRouteHandler,
  getV2GlossariesGlossaryIdEntriesRouteHandler,
  getV2GlossariesGlossaryIdRouteHandler,
  getV2GlossariesRouteHandler,
  getV2GlossaryLanguagePairsRouteHandler,
  getV2LanguagesRouteHandler,
  getV2UsageRouteHandler,
  getV3GlossariesGlossaryIdEntriesRouteHandler,
  getV3GlossariesGlossaryIdRouteHandler,
  getV3GlossariesRouteHandler,
  getV3LanguagesResourcesRouteHandler,
  getV3LanguagesRouteHandler,
  getV3SpokenTermsRouteHandler,
  getV3SpokenTermsSpokenTermsIdEntriesRouteHandler,
  getV3SpokenTermsSpokenTermsIdRouteHandler,
  getV3StyleProfilesRouteHandler,
  getV3StyleProfilesStyleProfileIdRouteHandler,
  getV3StyleRulesRouteHandler,
  getV3StyleRulesStyleIdCustomInstructionsInstructionIdRouteHandler,
  getV3StyleRulesStyleIdRouteHandler,
  getV3TranslationMemoriesJobsJobIdRouteHandler,
  getV3TranslationMemoriesRouteHandler,
  getV3TranslationMemoriesTranslationMemoryIdRouteHandler,
  getV3TranslationMemoriesTranslationMemoryIdSegmentsRouteHandler,
  getV3VoiceRealtimeRouteHandler,
  patchV3GlossariesGlossaryIdRouteHandler,
  patchV3SpokenTermsSpokenTermsIdRouteHandler,
  patchV3StyleProfilesStyleProfileIdRouteHandler,
  patchV3StyleRulesStyleIdRouteHandler,
  postV1JobsVoiceTranslateRouteHandler,
  postV2AdminDeveloperKeysRouteHandler,
  postV2DocumentDocumentIdResultRouteHandler,
  postV2DocumentDocumentIdRouteHandler,
  postV2DocumentRouteHandler,
  postV2GlossariesRouteHandler,
  postV2TranslateRouteHandler,
  postV2WriteCorrectRouteHandler,
  postV2WriteRephraseRouteHandler,
  postV3GlossariesRouteHandler,
  postV3SpokenTermsRouteHandler,
  postV3StyleProfilesRouteHandler,
  postV3StyleRulesRouteHandler,
  postV3StyleRulesStyleIdCustomInstructionsRouteHandler,
  postV3TranslationMemoriesImportRouteHandler,
  postV3TranslationMemoriesTranslationMemoryIdExportRouteHandler,
  postV3VoiceRealtimeRouteHandler,
  putV2AdminDeveloperKeysDeactivateRouteHandler,
  putV2AdminDeveloperKeysLabelRouteHandler,
  putV2AdminDeveloperKeysLimitsRouteHandler,
  putV3GlossariesGlossaryIdDictionariesRouteHandler,
  putV3SpokenTermsSpokenTermsIdTermListsRouteHandler,
  putV3StyleRulesStyleIdConfiguredRulesRouteHandler,
  putV3StyleRulesStyleIdCustomInstructionsInstructionIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV2AdminAnalyticsRoute, getV2AdminAnalyticsRouteHandler)
  .openapi(getV2AdminAnalyticsCustomTagsRoute, getV2AdminAnalyticsCustomTagsRouteHandler)
  .openapi(postV2AdminDeveloperKeysRoute, postV2AdminDeveloperKeysRouteHandler)
  .openapi(getV2AdminDeveloperKeysRoute, getV2AdminDeveloperKeysRouteHandler)
  .openapi(putV2AdminDeveloperKeysDeactivateRoute, putV2AdminDeveloperKeysDeactivateRouteHandler)
  .openapi(putV2AdminDeveloperKeysLabelRoute, putV2AdminDeveloperKeysLabelRouteHandler)
  .openapi(putV2AdminDeveloperKeysLimitsRoute, putV2AdminDeveloperKeysLimitsRouteHandler)
  .openapi(postV2TranslateRoute, postV2TranslateRouteHandler)
  .openapi(postV2DocumentRoute, postV2DocumentRouteHandler)
  .openapi(postV2DocumentDocumentIdRoute, postV2DocumentDocumentIdRouteHandler)
  .openapi(postV2DocumentDocumentIdResultRoute, postV2DocumentDocumentIdResultRouteHandler)
  .openapi(getV2GlossaryLanguagePairsRoute, getV2GlossaryLanguagePairsRouteHandler)
  .openapi(postV3GlossariesRoute, postV3GlossariesRouteHandler)
  .openapi(getV3GlossariesRoute, getV3GlossariesRouteHandler)
  .openapi(getV3GlossariesGlossaryIdRoute, getV3GlossariesGlossaryIdRouteHandler)
  .openapi(patchV3GlossariesGlossaryIdRoute, patchV3GlossariesGlossaryIdRouteHandler)
  .openapi(deleteV3GlossariesGlossaryIdRoute, deleteV3GlossariesGlossaryIdRouteHandler)
  .openapi(getV3GlossariesGlossaryIdEntriesRoute, getV3GlossariesGlossaryIdEntriesRouteHandler)
  .openapi(
    deleteV3GlossariesGlossaryIdDictionariesRoute,
    deleteV3GlossariesGlossaryIdDictionariesRouteHandler,
  )
  .openapi(
    putV3GlossariesGlossaryIdDictionariesRoute,
    putV3GlossariesGlossaryIdDictionariesRouteHandler,
  )
  .openapi(postV2GlossariesRoute, postV2GlossariesRouteHandler)
  .openapi(getV2GlossariesRoute, getV2GlossariesRouteHandler)
  .openapi(getV2GlossariesGlossaryIdRoute, getV2GlossariesGlossaryIdRouteHandler)
  .openapi(deleteV2GlossariesGlossaryIdRoute, deleteV2GlossariesGlossaryIdRouteHandler)
  .openapi(getV2GlossariesGlossaryIdEntriesRoute, getV2GlossariesGlossaryIdEntriesRouteHandler)
  .openapi(postV2WriteRephraseRoute, postV2WriteRephraseRouteHandler)
  .openapi(postV2WriteCorrectRoute, postV2WriteCorrectRouteHandler)
  .openapi(getV2UsageRoute, getV2UsageRouteHandler)
  .openapi(getV2LanguagesRoute, getV2LanguagesRouteHandler)
  .openapi(postV3SpokenTermsRoute, postV3SpokenTermsRouteHandler)
  .openapi(getV3SpokenTermsRoute, getV3SpokenTermsRouteHandler)
  .openapi(getV3SpokenTermsSpokenTermsIdRoute, getV3SpokenTermsSpokenTermsIdRouteHandler)
  .openapi(patchV3SpokenTermsSpokenTermsIdRoute, patchV3SpokenTermsSpokenTermsIdRouteHandler)
  .openapi(deleteV3SpokenTermsSpokenTermsIdRoute, deleteV3SpokenTermsSpokenTermsIdRouteHandler)
  .openapi(
    getV3SpokenTermsSpokenTermsIdEntriesRoute,
    getV3SpokenTermsSpokenTermsIdEntriesRouteHandler,
  )
  .openapi(
    putV3SpokenTermsSpokenTermsIdTermListsRoute,
    putV3SpokenTermsSpokenTermsIdTermListsRouteHandler,
  )
  .openapi(
    deleteV3SpokenTermsSpokenTermsIdTermListsRoute,
    deleteV3SpokenTermsSpokenTermsIdTermListsRouteHandler,
  )
  .openapi(getV3LanguagesResourcesRoute, getV3LanguagesResourcesRouteHandler)
  .openapi(getV3LanguagesRoute, getV3LanguagesRouteHandler)
  .openapi(getV3TranslationMemoriesRoute, getV3TranslationMemoriesRouteHandler)
  .openapi(postV3TranslationMemoriesImportRoute, postV3TranslationMemoriesImportRouteHandler)
  .openapi(getV3TranslationMemoriesJobsJobIdRoute, getV3TranslationMemoriesJobsJobIdRouteHandler)
  .openapi(
    getV3TranslationMemoriesTranslationMemoryIdRoute,
    getV3TranslationMemoriesTranslationMemoryIdRouteHandler,
  )
  .openapi(
    deleteV3TranslationMemoriesTranslationMemoryIdRoute,
    deleteV3TranslationMemoriesTranslationMemoryIdRouteHandler,
  )
  .openapi(
    getV3TranslationMemoriesTranslationMemoryIdSegmentsRoute,
    getV3TranslationMemoriesTranslationMemoryIdSegmentsRouteHandler,
  )
  .openapi(
    postV3TranslationMemoriesTranslationMemoryIdExportRoute,
    postV3TranslationMemoriesTranslationMemoryIdExportRouteHandler,
  )
  .openapi(getV3StyleProfilesRoute, getV3StyleProfilesRouteHandler)
  .openapi(postV3StyleProfilesRoute, postV3StyleProfilesRouteHandler)
  .openapi(getV3StyleProfilesStyleProfileIdRoute, getV3StyleProfilesStyleProfileIdRouteHandler)
  .openapi(patchV3StyleProfilesStyleProfileIdRoute, patchV3StyleProfilesStyleProfileIdRouteHandler)
  .openapi(
    deleteV3StyleProfilesStyleProfileIdRoute,
    deleteV3StyleProfilesStyleProfileIdRouteHandler,
  )
  .openapi(getV3StyleRulesRoute, getV3StyleRulesRouteHandler)
  .openapi(postV3StyleRulesRoute, postV3StyleRulesRouteHandler)
  .openapi(getV3StyleRulesStyleIdRoute, getV3StyleRulesStyleIdRouteHandler)
  .openapi(patchV3StyleRulesStyleIdRoute, patchV3StyleRulesStyleIdRouteHandler)
  .openapi(deleteV3StyleRulesStyleIdRoute, deleteV3StyleRulesStyleIdRouteHandler)
  .openapi(
    putV3StyleRulesStyleIdConfiguredRulesRoute,
    putV3StyleRulesStyleIdConfiguredRulesRouteHandler,
  )
  .openapi(
    postV3StyleRulesStyleIdCustomInstructionsRoute,
    postV3StyleRulesStyleIdCustomInstructionsRouteHandler,
  )
  .openapi(
    getV3StyleRulesStyleIdCustomInstructionsInstructionIdRoute,
    getV3StyleRulesStyleIdCustomInstructionsInstructionIdRouteHandler,
  )
  .openapi(
    putV3StyleRulesStyleIdCustomInstructionsInstructionIdRoute,
    putV3StyleRulesStyleIdCustomInstructionsInstructionIdRouteHandler,
  )
  .openapi(
    deleteV3StyleRulesStyleIdCustomInstructionsInstructionIdRoute,
    deleteV3StyleRulesStyleIdCustomInstructionsInstructionIdRouteHandler,
  )
  .openapi(postV3VoiceRealtimeRoute, postV3VoiceRealtimeRouteHandler)
  .openapi(getV3VoiceRealtimeRoute, getV3VoiceRealtimeRouteHandler)
  .openapi(postV1JobsVoiceTranslateRoute, postV1JobsVoiceTranslateRouteHandler)
  .openapi(getV1JobsVoiceTranslateJobIdRoute, getV1JobsVoiceTranslateJobIdRouteHandler)
  .openapi(getV1QualityEvaluationsJobIdRoute, getV1QualityEvaluationsJobIdRouteHandler)

export default app
