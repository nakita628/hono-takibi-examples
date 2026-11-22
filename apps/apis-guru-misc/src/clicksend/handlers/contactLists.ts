import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteListsListIdRoute,
  getListsListIdExportFilenameFilenameRoute,
  getListsListIdImportFieldsRoute,
  getListsListIdRoute,
  getListsRoute,
  postListsListIdImportCsvPreviewRoute,
  postListsListIdImportRoute,
  postListsRoute,
  putListsListIdRemoveDuplicatesRoute,
  putListsListIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contactListsHandler = app
  .openapi(getListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteListsListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListsListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putListsListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListsListIdExportFilenameFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postListsListIdImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postListsListIdImportCsvPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListsListIdImportFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putListsListIdRemoveDuplicatesRoute, (c) => {
    throw new Error('Not implemented')
  })
