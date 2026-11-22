import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV3TranslationMemoriesTranslationMemoryIdRoute,
  getV3TranslationMemoriesJobsJobIdRoute,
  getV3TranslationMemoriesRoute,
  getV3TranslationMemoriesTranslationMemoryIdRoute,
  getV3TranslationMemoriesTranslationMemoryIdSegmentsRoute,
  postV3TranslationMemoriesImportRoute,
  postV3TranslationMemoriesTranslationMemoryIdExportRoute,
} from '../routes'

const app = new OpenAPIHono()

export const translationMemoriesHandler = app
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
