import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCombinedSubmissionsCombinedSubmissionIdRoute,
  deleteFoldersFolderIdRoute,
  deleteSubmissionsSubmissionIdRoute,
  getAuthenticationRoute,
  getCombinedSubmissionsCombinedSubmissionIdRoute,
  getCombinedSubmissionsRoute,
  getDataRequestsDataRequestIdRoute,
  getFoldersIndexRoute,
  getSubmissionsBatchesSubmissionBatchIdRoute,
  getSubmissionsRoute,
  getSubmissionsSubmissionIdRoute,
  getTemplatesRoute,
  getTemplatesTemplateIdFullTrueRoute,
  getTemplatesTemplateIdRoute,
  getTemplatesTemplateIdSchemaRoute,
  getTemplatesTemplateIdSubmissionsRoute,
  getUploadsPresignRoute,
  postCombinedSubmissionsRoute,
  postCombinedSubmissionsV2Route,
  postCustomFilesRoute,
  postDataRequestsDataRequestIdTokensRoute,
  postFoldersFolderIdMoveRoute,
  postFoldersFolderIdRenameRoute,
  postFoldersIndexRoute,
  postSubmissionsBatchesRoute,
  postTemplatesDescCachedUploadRoute,
  postTemplatesDescHtmlRoute,
  postTemplatesRoute,
  postTemplatesTemplateIdCopyRoute,
  postTemplatesTemplateIdMoveRoute,
  postTemplatesTemplateIdSubmissionsBatchRoute,
  postTemplatesTemplateIdSubmissionsRoute,
  putDataRequestsDataRequestIdRoute,
  putTemplatesTemplateIdAddFieldsRoute,
  putTemplatesTemplateIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pdfHandler = app
  .openapi(getAuthenticationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCombinedSubmissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCombinedSubmissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCombinedSubmissionsCombinedSubmissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCombinedSubmissionsCombinedSubmissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCombinedSubmissionsV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataRequestsDataRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDataRequestsDataRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataRequestsDataRequestIdTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoldersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFoldersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFoldersFolderIdMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFoldersFolderIdRenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubmissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubmissionsBatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubmissionsBatchesSubmissionBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSubmissionsSubmissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubmissionsSubmissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTemplatesTemplateIdAddFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesTemplateIdCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesTemplateIdMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplatesTemplateIdSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplatesTemplateIdSubmissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesTemplateIdSubmissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesTemplateIdSubmissionsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplatesTemplateIdFullTrueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesDescCachedUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesDescHtmlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUploadsPresignRoute, (c) => {
    throw new Error('Not implemented')
  })
