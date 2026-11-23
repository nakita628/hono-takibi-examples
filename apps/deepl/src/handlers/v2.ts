import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2GlossariesGlossaryIdRoute,
  getV2AdminAnalyticsCustomTagsRoute,
  getV2AdminAnalyticsRoute,
  getV2AdminDeveloperKeysRoute,
  getV2GlossariesGlossaryIdEntriesRoute,
  getV2GlossariesGlossaryIdRoute,
  getV2GlossariesRoute,
  getV2GlossaryLanguagePairsRoute,
  getV2LanguagesRoute,
  getV2UsageRoute,
  postV2AdminDeveloperKeysRoute,
  postV2DocumentDocumentIdResultRoute,
  postV2DocumentDocumentIdRoute,
  postV2DocumentRoute,
  postV2GlossariesRoute,
  postV2TranslateRoute,
  postV2WriteCorrectRoute,
  postV2WriteRephraseRoute,
  putV2AdminDeveloperKeysDeactivateRoute,
  putV2AdminDeveloperKeysLabelRoute,
  putV2AdminDeveloperKeysLimitsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(getV2AdminAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AdminAnalyticsCustomTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AdminDeveloperKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AdminDeveloperKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2AdminDeveloperKeysDeactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2AdminDeveloperKeysLabelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2AdminDeveloperKeysLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TranslateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DocumentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DocumentDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DocumentDocumentIdResultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2GlossaryLanguagePairsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2GlossariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2GlossariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2GlossariesGlossaryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2GlossariesGlossaryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2GlossariesGlossaryIdEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2WriteRephraseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2WriteCorrectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
