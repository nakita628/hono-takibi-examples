import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609FeedbackSubmissionsFeedbackSubmissionIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects202609FeedbackSubmissionsFeedbackSubmissionIdAssociationsToObjectTypeRoute,
  getCrmObjects202609FeedbackSubmissionsFeedbackSubmissionIdRoute,
  getCrmObjects202609FeedbackSubmissionsRoute,
  patchCrmObjects202609FeedbackSubmissionsFeedbackSubmissionIdRoute,
  postCrmObjects202609FeedbackSubmissionsRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getCrmObjects202609FeedbackSubmissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609FeedbackSubmissionsRoute, (c) => {
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
    (c) => {},
  )
  .openapi(putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
    (c) => {},
  )
