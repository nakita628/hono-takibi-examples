import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV4ProjectsIdExportDownloadRoute,
  getApiV4ProjectsIdExportRelationsDownloadRoute,
  getApiV4ProjectsIdExportRelationsStatusRoute,
  getApiV4ProjectsIdExportRoute,
  getApiV4ProjectsIdImportRoute,
  getApiV4ProjectsIdRelationImportsRoute,
  postApiV4ImportBitbucketRoute,
  postApiV4ImportBitbucketServerRoute,
  postApiV4ImportGithubCancelRoute,
  postApiV4ImportGithubRoute,
  postApiV4ProjectsIdExportRelationsRoute,
  postApiV4ProjectsIdExportRoute,
  postApiV4ProjectsIdGithubWebhooksRoute,
  postApiV4ProjectsIdImportGithubSyncRestoreRoute,
  postApiV4ProjectsIdImportGitRoute,
  postApiV4ProjectsImportAuthorizeRoute,
  postApiV4ProjectsImportRelationAuthorizeRoute,
  postApiV4ProjectsImportRelationRoute,
  postApiV4ProjectsImportRoute,
  postApiV4ProjectsRemoteImportRoute,
  postApiV4ProjectsRemoteImportS3Route,
} from '../routes'

const app = new OpenAPIHono()

export const projectImportHandler = app
  .openapi(postApiV4ProjectsImportAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdImportGitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsRemoteImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsImportRelationAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsImportRelationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdRelationImportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsRemoteImportS3Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdExportDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdExportRelationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdExportRelationsDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdExportRelationsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdGithubWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ImportGithubRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ImportGithubCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdImportGithubSyncRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ImportBitbucketServerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ImportBitbucketRoute, (c) => {
    throw new Error('Not implemented')
  })
