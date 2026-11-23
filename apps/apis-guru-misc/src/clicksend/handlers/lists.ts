import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteListsListIdContactsContactIdRoute,
  deleteListsListIdRoute,
  getListsListIdContactsContactIdRoute,
  getListsListIdContactsRoute,
  getListsListIdExportFilenameFilenameRoute,
  getListsListIdImportFieldsRoute,
  getListsListIdRoute,
  getListsRoute,
  postListsListIdContactsRoute,
  postListsListIdImportCsvPreviewRoute,
  postListsListIdImportRoute,
  postListsRoute,
  putListsFromListIdContactsContactIdToListIdRoute,
  putListsListIdContactsContactIdRoute,
  putListsListIdRemoveDuplicatesRoute,
  putListsListIdRemoveOptedOutContactsOptOutListIdRoute,
  putListsListIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const listsHandler = app
  .openapi(getListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putListsFromListIdContactsContactIdToListIdRoute, (c) => {
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
  .openapi(getListsListIdContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postListsListIdContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteListsListIdContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListsListIdContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putListsListIdContactsContactIdRoute, (c) => {
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
  .openapi(putListsListIdRemoveOptedOutContactsOptOutListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
