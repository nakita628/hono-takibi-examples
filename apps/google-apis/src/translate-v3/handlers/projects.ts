import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV3NameRoute,
  getV3NameLocationsRoute,
  getV3NameOperationsRoute,
  getV3NameRoute,
  getV3ParentAdaptiveMtDatasetsRoute,
  getV3ParentAdaptiveMtFilesRoute,
  getV3ParentAdaptiveMtSentencesRoute,
  getV3ParentDatasetsRoute,
  getV3ParentExamplesRoute,
  getV3ParentGlossariesRoute,
  getV3ParentGlossaryEntriesRoute,
  getV3ParentModelsRoute,
  getV3ParentSupportedLanguagesRoute,
  patchV3NameRoute,
  postV3DatasetExportDataRoute,
  postV3DatasetImportDataRoute,
  postV3NameCancelRoute,
  postV3NameWaitRoute,
  postV3ParentAdaptiveMtDatasetsRoute,
  postV3ParentAdaptiveMtTranslateRoute,
  postV3ParentBatchTranslateDocumentRoute,
  postV3ParentBatchTranslateTextRoute,
  postV3ParentDatasetsRoute,
  postV3ParentDetectLanguageRoute,
  postV3ParentGlossariesRoute,
  postV3ParentGlossaryEntriesRoute,
  postV3ParentImportAdaptiveMtFileRoute,
  postV3ParentModelsRoute,
  postV3ParentRomanizeTextRoute,
  postV3ParentTranslateDocumentRoute,
  postV3ParentTranslateTextRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(postV3DatasetExportDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3DatasetImportDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV3NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3NameLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3NameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3NameWaitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3ParentAdaptiveMtDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3ParentAdaptiveMtDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3ParentAdaptiveMtFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3ParentAdaptiveMtSentencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3ParentDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3ParentDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3ParentExamplesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3ParentGlossariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3ParentGlossariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3ParentGlossaryEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3ParentGlossaryEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3ParentModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3ParentModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3ParentSupportedLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3ParentAdaptiveMtTranslateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3ParentBatchTranslateDocumentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3ParentBatchTranslateTextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3ParentDetectLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3ParentImportAdaptiveMtFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3ParentRomanizeTextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3ParentTranslateDocumentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3ParentTranslateTextRoute, (c) => {
    throw new Error('Not implemented')
  })
