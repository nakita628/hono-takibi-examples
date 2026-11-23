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
} from './routes'
import {
  deleteCrmObjects202609FeedbackSubmissionsFeedbackSubmissionIdRouteHandler,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  getCrmObjects202609FeedbackSubmissionsFeedbackSubmissionIdAssociationsToObjectTypeRouteHandler,
  getCrmObjects202609FeedbackSubmissionsFeedbackSubmissionIdRouteHandler,
  getCrmObjects202609FeedbackSubmissionsRouteHandler,
  patchCrmObjects202609FeedbackSubmissionsFeedbackSubmissionIdRouteHandler,
  postCrmObjects202609FeedbackSubmissionsBatchArchiveRouteHandler,
  postCrmObjects202609FeedbackSubmissionsBatchCreateRouteHandler,
  postCrmObjects202609FeedbackSubmissionsBatchReadRouteHandler,
  postCrmObjects202609FeedbackSubmissionsBatchUpdateRouteHandler,
  postCrmObjects202609FeedbackSubmissionsBatchUpsertRouteHandler,
  postCrmObjects202609FeedbackSubmissionsGdprDeleteRouteHandler,
  postCrmObjects202609FeedbackSubmissionsMergeRouteHandler,
  postCrmObjects202609FeedbackSubmissionsRouteHandler,
  postCrmObjects202609FeedbackSubmissionsSearchRouteHandler,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRouteHandler,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getCrmObjects202609FeedbackSubmissionsRoute,
    getCrmObjects202609FeedbackSubmissionsRouteHandler,
  )
  .openapi(
    postCrmObjects202609FeedbackSubmissionsRoute,
    postCrmObjects202609FeedbackSubmissionsRouteHandler,
  )
  .openapi(
    postCrmObjects202609FeedbackSubmissionsBatchArchiveRoute,
    postCrmObjects202609FeedbackSubmissionsBatchArchiveRouteHandler,
  )
  .openapi(
    postCrmObjects202609FeedbackSubmissionsBatchCreateRoute,
    postCrmObjects202609FeedbackSubmissionsBatchCreateRouteHandler,
  )
  .openapi(
    postCrmObjects202609FeedbackSubmissionsBatchReadRoute,
    postCrmObjects202609FeedbackSubmissionsBatchReadRouteHandler,
  )
  .openapi(
    postCrmObjects202609FeedbackSubmissionsBatchUpdateRoute,
    postCrmObjects202609FeedbackSubmissionsBatchUpdateRouteHandler,
  )
  .openapi(
    postCrmObjects202609FeedbackSubmissionsBatchUpsertRoute,
    postCrmObjects202609FeedbackSubmissionsBatchUpsertRouteHandler,
  )
  .openapi(
    postCrmObjects202609FeedbackSubmissionsGdprDeleteRoute,
    postCrmObjects202609FeedbackSubmissionsGdprDeleteRouteHandler,
  )
  .openapi(
    postCrmObjects202609FeedbackSubmissionsMergeRoute,
    postCrmObjects202609FeedbackSubmissionsMergeRouteHandler,
  )
  .openapi(
    postCrmObjects202609FeedbackSubmissionsSearchRoute,
    postCrmObjects202609FeedbackSubmissionsSearchRouteHandler,
  )
  .openapi(
    getCrmObjects202609FeedbackSubmissionsFeedbackSubmissionIdRoute,
    getCrmObjects202609FeedbackSubmissionsFeedbackSubmissionIdRouteHandler,
  )
  .openapi(
    deleteCrmObjects202609FeedbackSubmissionsFeedbackSubmissionIdRoute,
    deleteCrmObjects202609FeedbackSubmissionsFeedbackSubmissionIdRouteHandler,
  )
  .openapi(
    patchCrmObjects202609FeedbackSubmissionsFeedbackSubmissionIdRoute,
    patchCrmObjects202609FeedbackSubmissionsFeedbackSubmissionIdRouteHandler,
  )
  .openapi(
    getCrmObjects202609FeedbackSubmissionsFeedbackSubmissionIdAssociationsToObjectTypeRoute,
    getCrmObjects202609FeedbackSubmissionsFeedbackSubmissionIdAssociationsToObjectTypeRouteHandler,
  )
  .openapi(
    putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
    putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRouteHandler,
  )
  .openapi(
    putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
    putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  )
  .openapi(
    deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
    deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  )

export default app
