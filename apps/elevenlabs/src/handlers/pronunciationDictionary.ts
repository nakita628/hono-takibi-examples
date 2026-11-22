import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1PronunciationDictionariesDictionaryIdVersionIdDownloadRoute,
  getV1PronunciationDictionariesPronunciationDictionaryIdRoute,
  getV1PronunciationDictionariesRoute,
  patchV1PronunciationDictionariesPronunciationDictionaryIdRoute,
  postV1PronunciationDictionariesAddFromFileRoute,
  postV1PronunciationDictionariesAddFromRulesRoute,
  postV1PronunciationDictionariesPronunciationDictionaryIdAddRulesRoute,
  postV1PronunciationDictionariesPronunciationDictionaryIdRemoveRulesRoute,
  postV1PronunciationDictionariesPronunciationDictionaryIdSetRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pronunciationDictionaryHandler = app
  .openapi(postV1PronunciationDictionariesAddFromFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PronunciationDictionariesAddFromRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PronunciationDictionariesPronunciationDictionaryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PronunciationDictionariesPronunciationDictionaryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PronunciationDictionariesPronunciationDictionaryIdSetRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PronunciationDictionariesPronunciationDictionaryIdAddRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PronunciationDictionariesPronunciationDictionaryIdRemoveRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PronunciationDictionariesDictionaryIdVersionIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PronunciationDictionariesRoute, (c) => {
    throw new Error('Not implemented')
  })
