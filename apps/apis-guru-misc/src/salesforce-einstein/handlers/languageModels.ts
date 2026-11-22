import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2LanguageModelsModelIdRoute,
  getV2LanguageDatasetsDatasetIdModelsRoute,
  getV2LanguageModelsModelIdLcRoute,
  getV2LanguageModelsModelIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const languageModelsHandler = app
  .openapi(getV2LanguageDatasetsDatasetIdModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2LanguageModelsModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LanguageModelsModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LanguageModelsModelIdLcRoute, (c) => {
    throw new Error('Not implemented')
  })
