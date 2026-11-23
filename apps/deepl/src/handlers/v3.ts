import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV3GlossariesGlossaryIdDictionariesRoute,
  deleteV3GlossariesGlossaryIdRoute,
  deleteV3SpokenTermsSpokenTermsIdRoute,
  deleteV3SpokenTermsSpokenTermsIdTermListsRoute,
  deleteV3StyleProfilesStyleProfileIdRoute,
  deleteV3StyleRulesStyleIdCustomInstructionsInstructionIdRoute,
  deleteV3StyleRulesStyleIdRoute,
  deleteV3TranslationMemoriesTranslationMemoryIdRoute,
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
  postV3GlossariesRoute,
  postV3SpokenTermsRoute,
  postV3StyleProfilesRoute,
  postV3StyleRulesRoute,
  postV3StyleRulesStyleIdCustomInstructionsRoute,
  postV3TranslationMemoriesImportRoute,
  postV3TranslationMemoriesTranslationMemoryIdExportRoute,
  postV3VoiceRealtimeRoute,
  putV3GlossariesGlossaryIdDictionariesRoute,
  putV3SpokenTermsSpokenTermsIdTermListsRoute,
  putV3StyleRulesStyleIdConfiguredRulesRoute,
  putV3StyleRulesStyleIdCustomInstructionsInstructionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v3Handler = app
  .openapi(postV3GlossariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3GlossariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3GlossariesGlossaryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV3GlossariesGlossaryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3GlossariesGlossaryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3GlossariesGlossaryIdEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3GlossariesGlossaryIdDictionariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV3GlossariesGlossaryIdDictionariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3SpokenTermsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3SpokenTermsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3SpokenTermsSpokenTermsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV3SpokenTermsSpokenTermsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3SpokenTermsSpokenTermsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3SpokenTermsSpokenTermsIdEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV3SpokenTermsSpokenTermsIdTermListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3SpokenTermsSpokenTermsIdTermListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3LanguagesResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3LanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3TranslationMemoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3TranslationMemoriesImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3TranslationMemoriesJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3TranslationMemoriesTranslationMemoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3TranslationMemoriesTranslationMemoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3TranslationMemoriesTranslationMemoryIdSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3TranslationMemoriesTranslationMemoryIdExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3StyleProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3StyleProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3StyleProfilesStyleProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV3StyleProfilesStyleProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3StyleProfilesStyleProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3StyleRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3StyleRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3StyleRulesStyleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV3StyleRulesStyleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3StyleRulesStyleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV3StyleRulesStyleIdConfiguredRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3StyleRulesStyleIdCustomInstructionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3StyleRulesStyleIdCustomInstructionsInstructionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV3StyleRulesStyleIdCustomInstructionsInstructionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3StyleRulesStyleIdCustomInstructionsInstructionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3VoiceRealtimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3VoiceRealtimeRoute, (c) => {
    throw new Error('Not implemented')
  })
