import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2LanguageDatasetsDatasetIdExamplesRoute,
  getV2LanguageExamplesRoute,
  postV2LanguageFeedbackRoute,
  putV2LanguageDatasetsDatasetIdUploadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const languageExamplesHandler = app
  .openapi(getV2LanguageDatasetsDatasetIdExamplesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2LanguageDatasetsDatasetIdUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LanguageExamplesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LanguageFeedbackRoute, (c) => {
    throw new Error('Not implemented')
  })
