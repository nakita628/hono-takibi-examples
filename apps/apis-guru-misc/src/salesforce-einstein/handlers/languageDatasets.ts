import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2LanguageDatasetsDatasetIdRoute,
  getV2LanguageDatasetsDatasetIdRoute,
  getV2LanguageDatasetsRoute,
  getV2LanguageDeletionIdRoute,
  postV2LanguageDatasetsUploadRoute,
  postV2LanguageDatasetsUploadSyncRoute,
} from '../routes'

const app = new OpenAPIHono()

export const languageDatasetsHandler = app
  .openapi(getV2LanguageDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LanguageDatasetsUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LanguageDatasetsUploadSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2LanguageDatasetsDatasetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LanguageDatasetsDatasetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LanguageDeletionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
