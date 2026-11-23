import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCourseMappingsOfferingIdExternalCourseIdRoute,
  deleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentIdRoute,
  deleteOfferingsOfferingIdChannelsChannelIdLearnersRoute,
  deleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmailRoute,
  deleteOfferingsOfferingIdUsersMarkerEmailMarksRoute,
  deleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdRoute,
  deleteOfferingsOfferingIdUsersUserEmailRoute,
  getCourseMappingsExternalcourseExternalCourseIdRoute,
  getCourseMappingsOfferingIdRoute,
  getCourseMappingsRoute,
  getCoursesContentIdActivationsRoute,
  getCoursesContentIdPermissionsRoute,
  getCoursesContentIdRoute,
  getCoursesRoute,
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
  getOrgRoute,
  getRoute,
  getUsersAllProgressRoute,
  getUsersUserEmailBadgesRoute,
  getUsersUserEmailOfferingsOfferingIdProgressRoute,
  getUsersUserEmailOfferingsRoute,
  getUsersUserEmailProgressRoute,
  getUsersUserEmailRoute,
  patchOfferingsOfferingIdAssessmentsAssessmentIdRoute,
  patchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRoute,
  patchOfferingsOfferingIdChannelsChannelIdRoute,
  patchOfferingsOfferingIdRoute,
  patchUsersUserEmailRoute,
  patchUsersUserEmailTransferRoute,
  postCoursesRootContentIdPermissionsUserEmailRoute,
  postOfferingsOfferingIdChannelsChannelIdLearnersRoute,
  postOfferingsOfferingIdChannelsRoute,
  postOfferingsOfferingIdGroupsGroupIdLearnersRoute,
  postOfferingsOfferingIdGroupsRoute,
  postOfferingsOfferingIdUsersMarkerEmailMarksRoute,
  postOfferingsOfferingIdUsersRoute,
  postOfferingsOfferingIdUsersUserEmailBadgesAwardRoute,
  postOfferingsRoute,
  postUsersRoute,
  postUsersUserEmailInviteEmailRoute,
  postUsersUserEmailOfferingsRoute,
  postUsersUserEmailPermissionsPermissionNameRoute,
  putCourseMappingsOfferingIdExternalCourseIdRoute,
  putCoursesContentIdMetadataCategoryRoute,
  putCoursesContentIdMetadataLevelRoute,
  putCoursesContentIdMetadataTagsRoute,
  putCoursesContentIdMetadataTopicRoute,
  putOfferingsOfferingIdMetadataCategoryRoute,
  putOfferingsOfferingIdMetadataLevelRoute,
  putOfferingsOfferingIdMetadataTagsRoute,
  putOfferingsOfferingIdMetadataTopicRoute,
  putUsersUserEmailSuspendRoute,
} from './routes'
import {
  deleteCourseMappingsOfferingIdExternalCourseIdRouteHandler,
  deleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentIdRouteHandler,
  deleteOfferingsOfferingIdChannelsChannelIdLearnersRouteHandler,
  deleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmailRouteHandler,
  deleteOfferingsOfferingIdUsersMarkerEmailMarksRouteHandler,
  deleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdRouteHandler,
  deleteOfferingsOfferingIdUsersUserEmailRouteHandler,
  getCourseMappingsExternalcourseExternalCourseIdRouteHandler,
  getCourseMappingsOfferingIdRouteHandler,
  getCourseMappingsRouteHandler,
  getCoursesContentIdActivationsRouteHandler,
  getCoursesContentIdPermissionsRouteHandler,
  getCoursesContentIdRouteHandler,
  getCoursesRouteHandler,
  getOfferingsCurrentRouteHandler,
  getOfferingsFutureRouteHandler,
  getOfferingsInfoTextPatternRouteHandler,
  getOfferingsOfferingIdActivitiesOpenresponseRouteHandler,
  getOfferingsOfferingIdAnalyticsActivitiesResponsesRouteHandler,
  getOfferingsOfferingIdAnalyticsChannelsChannelIdCommentsRouteHandler,
  getOfferingsOfferingIdAnalyticsChannelsChannelIdPostsRouteHandler,
  getOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesRouteHandler,
  getOfferingsOfferingIdAnalyticsLearnersProgressRouteHandler,
  getOfferingsOfferingIdAnalyticsMarksAssignmentsRouteHandler,
  getOfferingsOfferingIdAnalyticsMarksQuizzesRouteHandler,
  getOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesRouteHandler,
  getOfferingsOfferingIdAnalyticsPulsesResponsesRouteHandler,
  getOfferingsOfferingIdAnalyticsPulsesRouteHandler,
  getOfferingsOfferingIdAnalyticsSocialNotesRouteHandler,
  getOfferingsOfferingIdAnalyticsSubmissionsAssignmentsRouteHandler,
  getOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdRouteHandler,
  getOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdRouteHandler,
  getOfferingsOfferingIdAnalyticsUnitReactionsRouteHandler,
  getOfferingsOfferingIdAssessmentsRouteHandler,
  getOfferingsOfferingIdBadgesRouteHandler,
  getOfferingsOfferingIdChannelsChannelIdLearnersRouteHandler,
  getOfferingsOfferingIdChannelsRouteHandler,
  getOfferingsOfferingIdGroupsGroupIdLearnersRouteHandler,
  getOfferingsOfferingIdGroupsRouteHandler,
  getOfferingsOfferingIdLearnersPendingSubmissionRouteHandler,
  getOfferingsOfferingIdRouteHandler,
  getOfferingsOfferingIdUsersMarkerEmailMarksRouteHandler,
  getOfferingsOfferingIdUsersRouteHandler,
  getOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseRouteHandler,
  getOfferingsPastRouteHandler,
  getOfferingsRouteHandler,
  getOfferingsSummaryRouteHandler,
  getOrgRouteHandler,
  getRouteHandler,
  getUsersAllProgressRouteHandler,
  getUsersUserEmailBadgesRouteHandler,
  getUsersUserEmailOfferingsOfferingIdProgressRouteHandler,
  getUsersUserEmailOfferingsRouteHandler,
  getUsersUserEmailProgressRouteHandler,
  getUsersUserEmailRouteHandler,
  patchOfferingsOfferingIdAssessmentsAssessmentIdRouteHandler,
  patchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRouteHandler,
  patchOfferingsOfferingIdChannelsChannelIdRouteHandler,
  patchOfferingsOfferingIdRouteHandler,
  patchUsersUserEmailRouteHandler,
  patchUsersUserEmailTransferRouteHandler,
  postCoursesRootContentIdPermissionsUserEmailRouteHandler,
  postOfferingsOfferingIdChannelsChannelIdLearnersRouteHandler,
  postOfferingsOfferingIdChannelsRouteHandler,
  postOfferingsOfferingIdGroupsGroupIdLearnersRouteHandler,
  postOfferingsOfferingIdGroupsRouteHandler,
  postOfferingsOfferingIdUsersMarkerEmailMarksRouteHandler,
  postOfferingsOfferingIdUsersRouteHandler,
  postOfferingsOfferingIdUsersUserEmailBadgesAwardRouteHandler,
  postOfferingsRouteHandler,
  postUsersRouteHandler,
  postUsersUserEmailInviteEmailRouteHandler,
  postUsersUserEmailOfferingsRouteHandler,
  postUsersUserEmailPermissionsPermissionNameRouteHandler,
  putCourseMappingsOfferingIdExternalCourseIdRouteHandler,
  putCoursesContentIdMetadataCategoryRouteHandler,
  putCoursesContentIdMetadataLevelRouteHandler,
  putCoursesContentIdMetadataTagsRouteHandler,
  putCoursesContentIdMetadataTopicRouteHandler,
  putOfferingsOfferingIdMetadataCategoryRouteHandler,
  putOfferingsOfferingIdMetadataLevelRouteHandler,
  putOfferingsOfferingIdMetadataTagsRouteHandler,
  putOfferingsOfferingIdMetadataTopicRouteHandler,
  putUsersUserEmailSuspendRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getRoute, getRouteHandler)
  .openapi(getCourseMappingsRoute, getCourseMappingsRouteHandler)
  .openapi(
    getCourseMappingsExternalcourseExternalCourseIdRoute,
    getCourseMappingsExternalcourseExternalCourseIdRouteHandler,
  )
  .openapi(getCourseMappingsOfferingIdRoute, getCourseMappingsOfferingIdRouteHandler)
  .openapi(
    deleteCourseMappingsOfferingIdExternalCourseIdRoute,
    deleteCourseMappingsOfferingIdExternalCourseIdRouteHandler,
  )
  .openapi(
    putCourseMappingsOfferingIdExternalCourseIdRoute,
    putCourseMappingsOfferingIdExternalCourseIdRouteHandler,
  )
  .openapi(getCoursesRoute, getCoursesRouteHandler)
  .openapi(getCoursesContentIdRoute, getCoursesContentIdRouteHandler)
  .openapi(getCoursesContentIdActivationsRoute, getCoursesContentIdActivationsRouteHandler)
  .openapi(
    putCoursesContentIdMetadataCategoryRoute,
    putCoursesContentIdMetadataCategoryRouteHandler,
  )
  .openapi(putCoursesContentIdMetadataLevelRoute, putCoursesContentIdMetadataLevelRouteHandler)
  .openapi(putCoursesContentIdMetadataTagsRoute, putCoursesContentIdMetadataTagsRouteHandler)
  .openapi(putCoursesContentIdMetadataTopicRoute, putCoursesContentIdMetadataTopicRouteHandler)
  .openapi(getCoursesContentIdPermissionsRoute, getCoursesContentIdPermissionsRouteHandler)
  .openapi(
    postCoursesRootContentIdPermissionsUserEmailRoute,
    postCoursesRootContentIdPermissionsUserEmailRouteHandler,
  )
  .openapi(getOfferingsRoute, getOfferingsRouteHandler)
  .openapi(postOfferingsRoute, postOfferingsRouteHandler)
  .openapi(getOfferingsCurrentRoute, getOfferingsCurrentRouteHandler)
  .openapi(getOfferingsFutureRoute, getOfferingsFutureRouteHandler)
  .openapi(getOfferingsInfoTextPatternRoute, getOfferingsInfoTextPatternRouteHandler)
  .openapi(getOfferingsPastRoute, getOfferingsPastRouteHandler)
  .openapi(getOfferingsSummaryRoute, getOfferingsSummaryRouteHandler)
  .openapi(getOfferingsOfferingIdRoute, getOfferingsOfferingIdRouteHandler)
  .openapi(patchOfferingsOfferingIdRoute, patchOfferingsOfferingIdRouteHandler)
  .openapi(
    getOfferingsOfferingIdActivitiesOpenresponseRoute,
    getOfferingsOfferingIdActivitiesOpenresponseRouteHandler,
  )
  .openapi(
    getOfferingsOfferingIdAnalyticsActivitiesResponsesRoute,
    getOfferingsOfferingIdAnalyticsActivitiesResponsesRouteHandler,
  )
  .openapi(
    getOfferingsOfferingIdAnalyticsChannelsChannelIdCommentsRoute,
    getOfferingsOfferingIdAnalyticsChannelsChannelIdCommentsRouteHandler,
  )
  .openapi(
    getOfferingsOfferingIdAnalyticsChannelsChannelIdPostsRoute,
    getOfferingsOfferingIdAnalyticsChannelsChannelIdPostsRouteHandler,
  )
  .openapi(
    getOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesRoute,
    getOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesRouteHandler,
  )
  .openapi(
    getOfferingsOfferingIdAnalyticsLearnersProgressRoute,
    getOfferingsOfferingIdAnalyticsLearnersProgressRouteHandler,
  )
  .openapi(
    getOfferingsOfferingIdAnalyticsMarksAssignmentsRoute,
    getOfferingsOfferingIdAnalyticsMarksAssignmentsRouteHandler,
  )
  .openapi(
    getOfferingsOfferingIdAnalyticsMarksQuizzesRoute,
    getOfferingsOfferingIdAnalyticsMarksQuizzesRouteHandler,
  )
  .openapi(
    getOfferingsOfferingIdAnalyticsPulsesRoute,
    getOfferingsOfferingIdAnalyticsPulsesRouteHandler,
  )
  .openapi(
    getOfferingsOfferingIdAnalyticsPulsesResponsesRoute,
    getOfferingsOfferingIdAnalyticsPulsesResponsesRouteHandler,
  )
  .openapi(
    getOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesRoute,
    getOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesRouteHandler,
  )
  .openapi(
    getOfferingsOfferingIdAnalyticsSocialNotesRoute,
    getOfferingsOfferingIdAnalyticsSocialNotesRouteHandler,
  )
  .openapi(
    getOfferingsOfferingIdAnalyticsSubmissionsAssignmentsRoute,
    getOfferingsOfferingIdAnalyticsSubmissionsAssignmentsRouteHandler,
  )
  .openapi(
    getOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdRoute,
    getOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdRouteHandler,
  )
  .openapi(
    getOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdRoute,
    getOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdRouteHandler,
  )
  .openapi(
    getOfferingsOfferingIdAnalyticsUnitReactionsRoute,
    getOfferingsOfferingIdAnalyticsUnitReactionsRouteHandler,
  )
  .openapi(getOfferingsOfferingIdAssessmentsRoute, getOfferingsOfferingIdAssessmentsRouteHandler)
  .openapi(
    patchOfferingsOfferingIdAssessmentsAssessmentIdRoute,
    patchOfferingsOfferingIdAssessmentsAssessmentIdRouteHandler,
  )
  .openapi(
    deleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentIdRoute,
    deleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentIdRouteHandler,
  )
  .openapi(
    patchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRoute,
    patchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRouteHandler,
  )
  .openapi(getOfferingsOfferingIdBadgesRoute, getOfferingsOfferingIdBadgesRouteHandler)
  .openapi(getOfferingsOfferingIdChannelsRoute, getOfferingsOfferingIdChannelsRouteHandler)
  .openapi(postOfferingsOfferingIdChannelsRoute, postOfferingsOfferingIdChannelsRouteHandler)
  .openapi(
    patchOfferingsOfferingIdChannelsChannelIdRoute,
    patchOfferingsOfferingIdChannelsChannelIdRouteHandler,
  )
  .openapi(
    deleteOfferingsOfferingIdChannelsChannelIdLearnersRoute,
    deleteOfferingsOfferingIdChannelsChannelIdLearnersRouteHandler,
  )
  .openapi(
    getOfferingsOfferingIdChannelsChannelIdLearnersRoute,
    getOfferingsOfferingIdChannelsChannelIdLearnersRouteHandler,
  )
  .openapi(
    postOfferingsOfferingIdChannelsChannelIdLearnersRoute,
    postOfferingsOfferingIdChannelsChannelIdLearnersRouteHandler,
  )
  .openapi(getOfferingsOfferingIdGroupsRoute, getOfferingsOfferingIdGroupsRouteHandler)
  .openapi(postOfferingsOfferingIdGroupsRoute, postOfferingsOfferingIdGroupsRouteHandler)
  .openapi(
    getOfferingsOfferingIdGroupsGroupIdLearnersRoute,
    getOfferingsOfferingIdGroupsGroupIdLearnersRouteHandler,
  )
  .openapi(
    postOfferingsOfferingIdGroupsGroupIdLearnersRoute,
    postOfferingsOfferingIdGroupsGroupIdLearnersRouteHandler,
  )
  .openapi(
    deleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmailRoute,
    deleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmailRouteHandler,
  )
  .openapi(
    getOfferingsOfferingIdLearnersPendingSubmissionRoute,
    getOfferingsOfferingIdLearnersPendingSubmissionRouteHandler,
  )
  .openapi(
    putOfferingsOfferingIdMetadataCategoryRoute,
    putOfferingsOfferingIdMetadataCategoryRouteHandler,
  )
  .openapi(
    putOfferingsOfferingIdMetadataLevelRoute,
    putOfferingsOfferingIdMetadataLevelRouteHandler,
  )
  .openapi(putOfferingsOfferingIdMetadataTagsRoute, putOfferingsOfferingIdMetadataTagsRouteHandler)
  .openapi(
    putOfferingsOfferingIdMetadataTopicRoute,
    putOfferingsOfferingIdMetadataTopicRouteHandler,
  )
  .openapi(getOfferingsOfferingIdUsersRoute, getOfferingsOfferingIdUsersRouteHandler)
  .openapi(postOfferingsOfferingIdUsersRoute, postOfferingsOfferingIdUsersRouteHandler)
  .openapi(
    deleteOfferingsOfferingIdUsersMarkerEmailMarksRoute,
    deleteOfferingsOfferingIdUsersMarkerEmailMarksRouteHandler,
  )
  .openapi(
    getOfferingsOfferingIdUsersMarkerEmailMarksRoute,
    getOfferingsOfferingIdUsersMarkerEmailMarksRouteHandler,
  )
  .openapi(
    postOfferingsOfferingIdUsersMarkerEmailMarksRoute,
    postOfferingsOfferingIdUsersMarkerEmailMarksRouteHandler,
  )
  .openapi(
    deleteOfferingsOfferingIdUsersUserEmailRoute,
    deleteOfferingsOfferingIdUsersUserEmailRouteHandler,
  )
  .openapi(
    deleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdRoute,
    deleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdRouteHandler,
  )
  .openapi(
    postOfferingsOfferingIdUsersUserEmailBadgesAwardRoute,
    postOfferingsOfferingIdUsersUserEmailBadgesAwardRouteHandler,
  )
  .openapi(
    getOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseRoute,
    getOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseRouteHandler,
  )
  .openapi(getOrgRoute, getOrgRouteHandler)
  .openapi(postUsersRoute, postUsersRouteHandler)
  .openapi(getUsersAllProgressRoute, getUsersAllProgressRouteHandler)
  .openapi(getUsersUserEmailRoute, getUsersUserEmailRouteHandler)
  .openapi(patchUsersUserEmailRoute, patchUsersUserEmailRouteHandler)
  .openapi(getUsersUserEmailBadgesRoute, getUsersUserEmailBadgesRouteHandler)
  .openapi(postUsersUserEmailInviteEmailRoute, postUsersUserEmailInviteEmailRouteHandler)
  .openapi(getUsersUserEmailOfferingsRoute, getUsersUserEmailOfferingsRouteHandler)
  .openapi(postUsersUserEmailOfferingsRoute, postUsersUserEmailOfferingsRouteHandler)
  .openapi(
    getUsersUserEmailOfferingsOfferingIdProgressRoute,
    getUsersUserEmailOfferingsOfferingIdProgressRouteHandler,
  )
  .openapi(
    postUsersUserEmailPermissionsPermissionNameRoute,
    postUsersUserEmailPermissionsPermissionNameRouteHandler,
  )
  .openapi(getUsersUserEmailProgressRoute, getUsersUserEmailProgressRouteHandler)
  .openapi(putUsersUserEmailSuspendRoute, putUsersUserEmailSuspendRouteHandler)
  .openapi(patchUsersUserEmailTransferRoute, patchUsersUserEmailTransferRouteHandler)

export default app
