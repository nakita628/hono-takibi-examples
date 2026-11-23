import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentIdRoute,
  deleteOfferingsOfferingIdChannelsChannelIdLearnersRoute,
  deleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmailRoute,
  deleteOfferingsOfferingIdUsersMarkerEmailMarksRoute,
  deleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdRoute,
  deleteOfferingsOfferingIdUsersUserEmailRoute,
  getOfferingsCurrentRoute,
  getOfferingsFutureRoute,
  getOfferingsInfoTextPatternRoute,
  getOfferingsOfferingIdActivitiesOpenresponseRoute,
  getOfferingsOfferingIdAnalyticsActivitiesResponsesRoute,
  getOfferingsOfferingIdAnalyticsChannelsChannelIdCommentsRoute,
  getOfferingsOfferingIdAnalyticsChannelsChannelIdPostsRoute,
  getOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesRoute,
  getOfferingsOfferingIdAnalyticsLearnersProgressRoute,
  getOfferingsOfferingIdAnalyticsMarksAssignmentsRoute,
  getOfferingsOfferingIdAnalyticsMarksQuizzesRoute,
  getOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesRoute,
  getOfferingsOfferingIdAnalyticsPulsesResponsesRoute,
  getOfferingsOfferingIdAnalyticsPulsesRoute,
  getOfferingsOfferingIdAnalyticsSocialNotesRoute,
  getOfferingsOfferingIdAnalyticsSubmissionsAssignmentsRoute,
  getOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdRoute,
  getOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdRoute,
  getOfferingsOfferingIdAnalyticsUnitReactionsRoute,
  getOfferingsOfferingIdAssessmentsRoute,
  getOfferingsOfferingIdBadgesRoute,
  getOfferingsOfferingIdChannelsChannelIdLearnersRoute,
  getOfferingsOfferingIdChannelsRoute,
  getOfferingsOfferingIdGroupsGroupIdLearnersRoute,
  getOfferingsOfferingIdGroupsRoute,
  getOfferingsOfferingIdLearnersPendingSubmissionRoute,
  getOfferingsOfferingIdRoute,
  getOfferingsOfferingIdUsersMarkerEmailMarksRoute,
  getOfferingsOfferingIdUsersRoute,
  getOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseRoute,
  getOfferingsPastRoute,
  getOfferingsRoute,
  getOfferingsSummaryRoute,
  patchOfferingsOfferingIdAssessmentsAssessmentIdRoute,
  patchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRoute,
  patchOfferingsOfferingIdChannelsChannelIdRoute,
  patchOfferingsOfferingIdRoute,
  postOfferingsOfferingIdChannelsChannelIdLearnersRoute,
  postOfferingsOfferingIdChannelsRoute,
  postOfferingsOfferingIdGroupsGroupIdLearnersRoute,
  postOfferingsOfferingIdGroupsRoute,
  postOfferingsOfferingIdUsersMarkerEmailMarksRoute,
  postOfferingsOfferingIdUsersRoute,
  postOfferingsOfferingIdUsersUserEmailBadgesAwardRoute,
  postOfferingsRoute,
  putOfferingsOfferingIdMetadataCategoryRoute,
  putOfferingsOfferingIdMetadataLevelRoute,
  putOfferingsOfferingIdMetadataTagsRoute,
  putOfferingsOfferingIdMetadataTopicRoute,
} from '../routes'

const app = new OpenAPIHono()

export const offeringsHandler = app
  .openapi(getOfferingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOfferingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsCurrentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsFutureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsInfoTextPatternRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsPastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsOfferingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOfferingsOfferingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsOfferingIdActivitiesOpenresponseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsOfferingIdAnalyticsActivitiesResponsesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsOfferingIdAnalyticsChannelsChannelIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsOfferingIdAnalyticsChannelsChannelIdPostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsOfferingIdAnalyticsLearnersProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsOfferingIdAnalyticsMarksAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsOfferingIdAnalyticsMarksQuizzesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsOfferingIdAnalyticsPulsesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsOfferingIdAnalyticsPulsesResponsesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsOfferingIdAnalyticsSocialNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsOfferingIdAnalyticsSubmissionsAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsOfferingIdAnalyticsUnitReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsOfferingIdAssessmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOfferingsOfferingIdAssessmentsAssessmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsOfferingIdBadgesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsOfferingIdChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOfferingsOfferingIdChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOfferingsOfferingIdChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOfferingsOfferingIdChannelsChannelIdLearnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsOfferingIdChannelsChannelIdLearnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOfferingsOfferingIdChannelsChannelIdLearnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsOfferingIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOfferingsOfferingIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsOfferingIdGroupsGroupIdLearnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOfferingsOfferingIdGroupsGroupIdLearnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsOfferingIdLearnersPendingSubmissionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOfferingsOfferingIdMetadataCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOfferingsOfferingIdMetadataLevelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOfferingsOfferingIdMetadataTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOfferingsOfferingIdMetadataTopicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsOfferingIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOfferingsOfferingIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOfferingsOfferingIdUsersMarkerEmailMarksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsOfferingIdUsersMarkerEmailMarksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOfferingsOfferingIdUsersMarkerEmailMarksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOfferingsOfferingIdUsersUserEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOfferingsOfferingIdUsersUserEmailBadgesAwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseRoute, (c) => {
    throw new Error('Not implemented')
  })
