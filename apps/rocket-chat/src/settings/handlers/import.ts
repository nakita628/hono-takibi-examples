import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1GetCurrentImportOperationRoute,
  getApiV1GetImportFileDataRoute,
  getApiV1GetImportProgressRoute,
  getApiV1GetLatestImportOperationsRoute,
  getApiV1ImportersListRoute,
  postApiV1DownloadPendingAvatarsRoute,
  postApiV1DownloadPendingFilesRoute,
  postApiV1DownloadPublicImportFileRoute,
  postApiV1StartImportRoute,
  postApiV1UploadImportFileRoute,
} from '../routes'

const app = new OpenAPIHono()

export const importHandler = app
  .openapi(postApiV1UploadImportFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DownloadPublicImportFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1StartImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GetImportFileDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GetImportProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GetLatestImportOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DownloadPendingFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DownloadPendingAvatarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GetCurrentImportOperationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ImportersListRoute, (c) => {
    throw new Error('Not implemented')
  })
