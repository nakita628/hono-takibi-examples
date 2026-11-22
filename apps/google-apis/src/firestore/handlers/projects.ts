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
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(deleteV1beta2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1beta2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta2NameExportDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta2NameImportDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta2ParentFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta2ParentIndexesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta2ParentIndexesRoute, (c) => {
    throw new Error('Not implemented')
  })
