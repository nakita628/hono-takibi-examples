import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCrmObjects202609FeedbackSubmissionsBatchArchiveRoute,
  postCrmObjects202609FeedbackSubmissionsBatchCreateRoute,
  postCrmObjects202609FeedbackSubmissionsBatchReadRoute,
  postCrmObjects202609FeedbackSubmissionsBatchUpdateRoute,
  postCrmObjects202609FeedbackSubmissionsBatchUpsertRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const batchHandler = app
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
  .openapi(
    putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
    (c) => {},
  )
