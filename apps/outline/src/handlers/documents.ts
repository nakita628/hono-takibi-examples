import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postDocumentsAddGroupRoute,
  postDocumentsAddUserRoute,
  postDocumentsAnswerQuestionRoute,
  postDocumentsArchivedRoute,
  postDocumentsArchiveRoute,
  postDocumentsCreateRoute,
  postDocumentsDeletedRoute,
  postDocumentsDeleteRoute,
  postDocumentsDocumentsRoute,
  postDocumentsDraftsRoute,
  postDocumentsDuplicateRoute,
  postDocumentsEmptyTrashRoute,
  postDocumentsExportRoute,
  postDocumentsGroupMembershipsRoute,
  postDocumentsImportRoute,
  postDocumentsInfoRoute,
  postDocumentsInsightsRoute,
  postDocumentsListRoute,
  postDocumentsMembershipsRoute,
  postDocumentsMoveRoute,
  postDocumentsRemoveGroupRoute,
  postDocumentsRemoveUserRoute,
  postDocumentsRestoreRoute,
  postDocumentsSearchRoute,
  postDocumentsSearchTitlesRoute,
  postDocumentsTemplatizeRoute,
  postDocumentsUnpublishRoute,
  postDocumentsUpdateRoute,
  postDocumentsUsersRoute,
  postDocumentsViewedRoute,
} from '../routes'

const app = new OpenAPIHono()

export const documentsHandler = app
  .openapi(postDocumentsInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsInsightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsDraftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsViewedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsAnswerQuestionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsSearchTitlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsTemplatizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsUnpublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsAddUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsRemoveUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsArchivedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsDeletedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsDuplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsAddGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsRemoveGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsGroupMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsEmptyTrashRoute, (c) => {
    throw new Error('Not implemented')
  })
