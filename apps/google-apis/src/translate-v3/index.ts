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
} from './routes'
import {
  deleteV3NameRouteHandler,
  getV3NameLocationsRouteHandler,
  getV3NameOperationsRouteHandler,
  getV3NameRouteHandler,
  getV3ParentAdaptiveMtDatasetsRouteHandler,
  getV3ParentAdaptiveMtFilesRouteHandler,
  getV3ParentAdaptiveMtSentencesRouteHandler,
  getV3ParentDatasetsRouteHandler,
  getV3ParentExamplesRouteHandler,
  getV3ParentGlossariesRouteHandler,
  getV3ParentGlossaryEntriesRouteHandler,
  getV3ParentModelsRouteHandler,
  getV3ParentSupportedLanguagesRouteHandler,
  patchV3NameRouteHandler,
  postV3DatasetExportDataRouteHandler,
  postV3DatasetImportDataRouteHandler,
  postV3NameCancelRouteHandler,
  postV3NameWaitRouteHandler,
  postV3ParentAdaptiveMtDatasetsRouteHandler,
  postV3ParentAdaptiveMtTranslateRouteHandler,
  postV3ParentBatchTranslateDocumentRouteHandler,
  postV3ParentBatchTranslateTextRouteHandler,
  postV3ParentDatasetsRouteHandler,
  postV3ParentDetectLanguageRouteHandler,
  postV3ParentGlossariesRouteHandler,
  postV3ParentGlossaryEntriesRouteHandler,
  postV3ParentImportAdaptiveMtFileRouteHandler,
  postV3ParentModelsRouteHandler,
  postV3ParentRomanizeTextRouteHandler,
  postV3ParentTranslateDocumentRouteHandler,
  postV3ParentTranslateTextRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV3DatasetExportDataRoute, postV3DatasetExportDataRouteHandler)
  .openapi(postV3DatasetImportDataRoute, postV3DatasetImportDataRouteHandler)
  .openapi(deleteV3NameRoute, deleteV3NameRouteHandler)
  .openapi(getV3NameRoute, getV3NameRouteHandler)
  .openapi(patchV3NameRoute, patchV3NameRouteHandler)
  .openapi(getV3NameLocationsRoute, getV3NameLocationsRouteHandler)
  .openapi(getV3NameOperationsRoute, getV3NameOperationsRouteHandler)
  .openapi(postV3NameCancelRoute, postV3NameCancelRouteHandler)
  .openapi(postV3NameWaitRoute, postV3NameWaitRouteHandler)
  .openapi(getV3ParentAdaptiveMtDatasetsRoute, getV3ParentAdaptiveMtDatasetsRouteHandler)
  .openapi(postV3ParentAdaptiveMtDatasetsRoute, postV3ParentAdaptiveMtDatasetsRouteHandler)
  .openapi(getV3ParentAdaptiveMtFilesRoute, getV3ParentAdaptiveMtFilesRouteHandler)
  .openapi(getV3ParentAdaptiveMtSentencesRoute, getV3ParentAdaptiveMtSentencesRouteHandler)
  .openapi(getV3ParentDatasetsRoute, getV3ParentDatasetsRouteHandler)
  .openapi(postV3ParentDatasetsRoute, postV3ParentDatasetsRouteHandler)
  .openapi(getV3ParentExamplesRoute, getV3ParentExamplesRouteHandler)
  .openapi(getV3ParentGlossariesRoute, getV3ParentGlossariesRouteHandler)
  .openapi(postV3ParentGlossariesRoute, postV3ParentGlossariesRouteHandler)
  .openapi(getV3ParentGlossaryEntriesRoute, getV3ParentGlossaryEntriesRouteHandler)
  .openapi(postV3ParentGlossaryEntriesRoute, postV3ParentGlossaryEntriesRouteHandler)
  .openapi(getV3ParentModelsRoute, getV3ParentModelsRouteHandler)
  .openapi(postV3ParentModelsRoute, postV3ParentModelsRouteHandler)
  .openapi(getV3ParentSupportedLanguagesRoute, getV3ParentSupportedLanguagesRouteHandler)
  .openapi(postV3ParentAdaptiveMtTranslateRoute, postV3ParentAdaptiveMtTranslateRouteHandler)
  .openapi(postV3ParentBatchTranslateDocumentRoute, postV3ParentBatchTranslateDocumentRouteHandler)
  .openapi(postV3ParentBatchTranslateTextRoute, postV3ParentBatchTranslateTextRouteHandler)
  .openapi(postV3ParentDetectLanguageRoute, postV3ParentDetectLanguageRouteHandler)
  .openapi(postV3ParentImportAdaptiveMtFileRoute, postV3ParentImportAdaptiveMtFileRouteHandler)
  .openapi(postV3ParentRomanizeTextRoute, postV3ParentRomanizeTextRouteHandler)
  .openapi(postV3ParentTranslateDocumentRoute, postV3ParentTranslateDocumentRouteHandler)
  .openapi(postV3ParentTranslateTextRoute, postV3ParentTranslateTextRouteHandler)

export default app
