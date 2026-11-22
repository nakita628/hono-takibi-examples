import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDocumentsDocumentIdRoute,
  getDocumentsDocumentIdCustomOutputRoute,
  getDocumentsDocumentIdLastVersionRoute,
  getDocumentsDocumentIdOriginalFileRoute,
  getDocumentsDocumentIdPagePageRangeRoute,
  getDocumentsDocumentIdPageThumbnailPageRangeRoute,
  getDocumentsDocumentIdReversePageRangeRoute,
  getDocumentsDocumentIdRoute,
  getDocumentsDocumentIdTextRoute,
  getDocumentsDocumentIdWorkflowRoute,
  patchDocumentsInboxIdCopyInboxRoute,
  patchDocumentsInboxIdMoveInboxRoute,
  postDocumentsCustomOutputRoute,
  postDocumentsDocumentIdCompareVersionsRoute,
  postDocumentsDocumentIdFeedbackRoute,
  postDocumentsDocumentIdProcessTableAnnotationRoute,
  postDocumentsDocumentIdReprocessRoute,
  postDocumentsDocumentIdStatusDataRoute,
  postDocumentsEnrichRoute,
  postDocumentsFileQueryDataTypeRoute,
  postDocumentsInboxIdRoute,
  postDocumentsIndexRoute,
  postDocumentsQueryQueryTypeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const documentsHandler = app
  .openapi(postDocumentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsCustomOutputRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsEnrichRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsFileQueryDataTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsQueryQueryTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsDocumentIdCompareVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocumentsDocumentIdCustomOutputRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsDocumentIdFeedbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocumentsDocumentIdLastVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocumentsDocumentIdOriginalFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocumentsDocumentIdPagePageRangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocumentsDocumentIdPageThumbnailPageRangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsDocumentIdProcessTableAnnotationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsDocumentIdReprocessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocumentsDocumentIdReversePageRangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsDocumentIdStatusDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocumentsDocumentIdTextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocumentsDocumentIdWorkflowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsInboxIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDocumentsInboxIdCopyInboxRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDocumentsInboxIdMoveInboxRoute, (c) => {
    throw new Error('Not implemented')
  })
