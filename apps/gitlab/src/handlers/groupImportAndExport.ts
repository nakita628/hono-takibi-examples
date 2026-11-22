import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV4GroupsIdExportDownloadRoute,
  getApiV4GroupsIdExportRelationsDownloadRoute,
  getApiV4GroupsIdExportRelationsStatusRoute,
  postApiV4GroupsIdExportRelationsRoute,
  postApiV4GroupsIdExportRoute,
  postApiV4GroupsImportAuthorizeRoute,
  postApiV4GroupsImportRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupImportAndExportHandler = app
  .openapi(postApiV4GroupsImportAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdExportDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdExportRelationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdExportRelationsDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdExportRelationsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
