import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV3beta1NameRoute,
  getV3beta1NameLocationsRoute,
  getV3beta1NameOperationsRoute,
  getV3beta1NameRoute,
  getV3beta1ParentGlossariesRoute,
  getV3beta1ParentSupportedLanguagesRoute,
  postV3beta1NameCancelRoute,
  postV3beta1NameWaitRoute,
  postV3beta1ParentBatchTranslateDocumentRoute,
  postV3beta1ParentBatchTranslateTextRoute,
  postV3beta1ParentDetectLanguageRoute,
  postV3beta1ParentGlossariesRoute,
  postV3beta1ParentTranslateDocumentRoute,
  postV3beta1ParentTranslateTextRoute,
} from './routes'
import {
  deleteV3beta1NameRouteHandler,
  getV3beta1NameLocationsRouteHandler,
  getV3beta1NameOperationsRouteHandler,
  getV3beta1NameRouteHandler,
  getV3beta1ParentGlossariesRouteHandler,
  getV3beta1ParentSupportedLanguagesRouteHandler,
  postV3beta1NameCancelRouteHandler,
  postV3beta1NameWaitRouteHandler,
  postV3beta1ParentBatchTranslateDocumentRouteHandler,
  postV3beta1ParentBatchTranslateTextRouteHandler,
  postV3beta1ParentDetectLanguageRouteHandler,
  postV3beta1ParentGlossariesRouteHandler,
  postV3beta1ParentTranslateDocumentRouteHandler,
  postV3beta1ParentTranslateTextRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV3beta1NameRoute, deleteV3beta1NameRouteHandler)
  .openapi(getV3beta1NameRoute, getV3beta1NameRouteHandler)
  .openapi(getV3beta1NameLocationsRoute, getV3beta1NameLocationsRouteHandler)
  .openapi(getV3beta1NameOperationsRoute, getV3beta1NameOperationsRouteHandler)
  .openapi(postV3beta1NameCancelRoute, postV3beta1NameCancelRouteHandler)
  .openapi(postV3beta1NameWaitRoute, postV3beta1NameWaitRouteHandler)
  .openapi(getV3beta1ParentGlossariesRoute, getV3beta1ParentGlossariesRouteHandler)
  .openapi(postV3beta1ParentGlossariesRoute, postV3beta1ParentGlossariesRouteHandler)
  .openapi(getV3beta1ParentSupportedLanguagesRoute, getV3beta1ParentSupportedLanguagesRouteHandler)
  .openapi(
    postV3beta1ParentBatchTranslateDocumentRoute,
    postV3beta1ParentBatchTranslateDocumentRouteHandler,
  )
  .openapi(
    postV3beta1ParentBatchTranslateTextRoute,
    postV3beta1ParentBatchTranslateTextRouteHandler,
  )
  .openapi(postV3beta1ParentDetectLanguageRoute, postV3beta1ParentDetectLanguageRouteHandler)
  .openapi(postV3beta1ParentTranslateDocumentRoute, postV3beta1ParentTranslateDocumentRouteHandler)
  .openapi(postV3beta1ParentTranslateTextRoute, postV3beta1ParentTranslateTextRouteHandler)

export default app
