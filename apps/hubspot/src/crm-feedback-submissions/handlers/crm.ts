import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609FeedbackSubmissionsFeedbackSubmissionIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects202609FeedbackSubmissionsFeedbackSubmissionIdAssociationsToObjectTypeRoute,
  getCrmObjects202609FeedbackSubmissionsFeedbackSubmissionIdRoute,
  getCrmObjects202609FeedbackSubmissionsRoute,
  patchCrmObjects202609FeedbackSubmissionsFeedbackSubmissionIdRoute,
  postCrmObjects202609FeedbackSubmissionsBatchArchiveRoute,
  postCrmObjects202609FeedbackSubmissionsBatchCreateRoute,
  postCrmObjects202609FeedbackSubmissionsBatchReadRoute,
  postCrmObjects202609FeedbackSubmissionsBatchUpdateRoute,
  postCrmObjects202609FeedbackSubmissionsBatchUpsertRoute,
  postCrmObjects202609FeedbackSubmissionsGdprDeleteRoute,
  postCrmObjects202609FeedbackSubmissionsMergeRoute,
  postCrmObjects202609FeedbackSubmissionsRoute,
  postCrmObjects202609FeedbackSubmissionsSearchRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const crmHandler = app
  .openapi(getCrmObjects202609FeedbackSubmissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609FeedbackSubmissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609FeedbackSubmissionsBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609FeedbackSubmissionsBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609FeedbackSubmissionsBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609FeedbackSubmissionsBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609FeedbackSubmissionsBatchUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609FeedbackSubmissionsGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609FeedbackSubmissionsMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609FeedbackSubmissionsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609FeedbackSubmissionsFeedbackSubmissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609FeedbackSubmissionsFeedbackSubmissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects202609FeedbackSubmissionsFeedbackSubmissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getCrmObjects202609FeedbackSubmissionsFeedbackSubmissionIdAssociationsToObjectTypeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
