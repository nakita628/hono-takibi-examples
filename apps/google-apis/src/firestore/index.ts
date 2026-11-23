import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta2NameRoute,
  getV1beta2NameRoute,
  getV1beta2ParentFieldsRoute,
  getV1beta2ParentIndexesRoute,
  patchV1beta2NameRoute,
  postV1beta2NameExportDocumentsRoute,
  postV1beta2NameImportDocumentsRoute,
  postV1beta2ParentIndexesRoute,
} from './routes'
import {
  deleteV1beta2NameRouteHandler,
  getV1beta2NameRouteHandler,
  getV1beta2ParentFieldsRouteHandler,
  getV1beta2ParentIndexesRouteHandler,
  patchV1beta2NameRouteHandler,
  postV1beta2NameExportDocumentsRouteHandler,
  postV1beta2NameImportDocumentsRouteHandler,
  postV1beta2ParentIndexesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1beta2NameRoute, deleteV1beta2NameRouteHandler)
  .openapi(getV1beta2NameRoute, getV1beta2NameRouteHandler)
  .openapi(patchV1beta2NameRoute, patchV1beta2NameRouteHandler)
  .openapi(postV1beta2NameExportDocumentsRoute, postV1beta2NameExportDocumentsRouteHandler)
  .openapi(postV1beta2NameImportDocumentsRoute, postV1beta2NameImportDocumentsRouteHandler)
  .openapi(getV1beta2ParentFieldsRoute, getV1beta2ParentFieldsRouteHandler)
  .openapi(getV1beta2ParentIndexesRoute, getV1beta2ParentIndexesRouteHandler)
  .openapi(postV1beta2ParentIndexesRoute, postV1beta2ParentIndexesRouteHandler)

export default app
