import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteClassesClassArchiveRoute,
  deleteClassesClassAssignmentsAssignmentArchiveRoute,
  deleteClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsCommentRoute,
  deleteClassesClassAssignmentsAssignmentSubmissionsSubmissionRoute,
  deleteClassesClassUsersUserRoute,
  deleteCollectionsCollectionRoute,
  deleteCollectionsCollectionScoresScoreRoute,
  deleteOrganizationsInvitationsInvitationRoute,
  deleteOrganizationsLtiCredentialsCredentialsRoute,
  deleteOrganizationsUsersUserRoute,
  deleteScoresScoreCollaboratorsCollaboratorRoute,
  deleteScoresScoreCommentsCommentResolvedRoute,
  deleteScoresScoreCommentsCommentRoute,
  deleteScoresScoreRoute,
  deleteScoresScoreTracksTrackRoute,
  getClassesClassAssignmentsAssignmentSubmissionsCsvRoute,
  getClassesClassAssignmentsAssignmentSubmissionsExcelRoute,
  getClassesClassAssignmentsAssignmentSubmissionsRoute,
  getClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsRoute,
  getClassesClassAssignmentsAssignmentSubmissionsSubmissionHistoryRoute,
  getClassesClassAssignmentsAssignmentSubmissionsSubmissionRoute,
  getClassesClassAssignmentsRoute,
  getClassesClassRoute,
  getClassesClassStudentsUserSubmissionsRoute,
  getClassesRoute,
  getCollectionsCollectionRoute,
  getCollectionsCollectionScoresRoute,
  getCollectionsRoute,
  getGroupsGroupRoute,
  getGroupsGroupScoresRoute,
  getGroupsGroupUsersRoute,
  getMeRoute,
  getOrganizationsInvitationsRoute,
  getOrganizationsLtiCredentialsRoute,
  getOrganizationsUsersCountRoute,
  getOrganizationsUsersRoute,
  getScoresScoreCollaboratorsCollaboratorRoute,
  getScoresScoreCollaboratorsRoute,
  getScoresScoreCommentsRoute,
  getScoresScoreRevisionsRevisionFormatRoute,
  getScoresScoreRevisionsRevisionRoute,
  getScoresScoreRevisionsRoute,
  getScoresScoreRoute,
  getScoresScoreSubmissionsRoute,
  getScoresScoreTracksRoute,
  getScoresScoreTracksTrackRoute,
  getUsersUserLikesRoute,
  getUsersUserRoute,
  getUsersUserScoresRoute,
  postClassesClassActivateRoute,
  postClassesClassArchiveRoute,
  postClassesClassAssignmentsAssignmentArchiveRoute,
  postClassesClassAssignmentsAssignmentCopyRoute,
  postClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsRoute,
  postClassesClassAssignmentsRoute,
  postClassesEnrollEnrollmentCodeRoute,
  postClassesRoute,
  postCollectionsCollectionUntrashRoute,
  postCollectionsRoute,
  postOrganizationsInvitationsRoute,
  postOrganizationsLtiCredentialsRoute,
  postOrganizationsUsersRoute,
  postScoresRoute,
  postScoresScoreCollaboratorsRoute,
  postScoresScoreCommentsRoute,
  postScoresScoreForkRoute,
  postScoresScoreRevisionsRoute,
  postScoresScoreTracksRoute,
  postScoresScoreUntrashRoute,
  putClassesClassAssignmentsAssignmentSubmissionsRoute,
  putClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsCommentRoute,
  putClassesClassAssignmentsAssignmentSubmissionsSubmissionRoute,
  putClassesClassRoute,
  putClassesClassUsersUserRoute,
  putCollectionsCollectionRoute,
  putCollectionsCollectionScoresScoreRoute,
  putOrganizationsUsersUserRoute,
  putScoresScoreCommentsCommentResolvedRoute,
  putScoresScoreCommentsCommentRoute,
  putScoresScoreRoute,
  putScoresScoreTracksTrackRoute,
} from './routes'
import {
  deleteClassesClassArchiveRouteHandler,
  deleteClassesClassAssignmentsAssignmentArchiveRouteHandler,
  deleteClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsCommentRouteHandler,
  deleteClassesClassAssignmentsAssignmentSubmissionsSubmissionRouteHandler,
  deleteClassesClassUsersUserRouteHandler,
  deleteCollectionsCollectionRouteHandler,
  deleteCollectionsCollectionScoresScoreRouteHandler,
  deleteOrganizationsInvitationsInvitationRouteHandler,
  deleteOrganizationsLtiCredentialsCredentialsRouteHandler,
  deleteOrganizationsUsersUserRouteHandler,
  deleteScoresScoreCollaboratorsCollaboratorRouteHandler,
  deleteScoresScoreCommentsCommentResolvedRouteHandler,
  deleteScoresScoreCommentsCommentRouteHandler,
  deleteScoresScoreRouteHandler,
  deleteScoresScoreTracksTrackRouteHandler,
  getClassesClassAssignmentsAssignmentSubmissionsCsvRouteHandler,
  getClassesClassAssignmentsAssignmentSubmissionsExcelRouteHandler,
  getClassesClassAssignmentsAssignmentSubmissionsRouteHandler,
  getClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsRouteHandler,
  getClassesClassAssignmentsAssignmentSubmissionsSubmissionHistoryRouteHandler,
  getClassesClassAssignmentsAssignmentSubmissionsSubmissionRouteHandler,
  getClassesClassAssignmentsRouteHandler,
  getClassesClassRouteHandler,
  getClassesClassStudentsUserSubmissionsRouteHandler,
  getClassesRouteHandler,
  getCollectionsCollectionRouteHandler,
  getCollectionsCollectionScoresRouteHandler,
  getCollectionsRouteHandler,
  getGroupsGroupRouteHandler,
  getGroupsGroupScoresRouteHandler,
  getGroupsGroupUsersRouteHandler,
  getMeRouteHandler,
  getOrganizationsInvitationsRouteHandler,
  getOrganizationsLtiCredentialsRouteHandler,
  getOrganizationsUsersCountRouteHandler,
  getOrganizationsUsersRouteHandler,
  getScoresScoreCollaboratorsCollaboratorRouteHandler,
  getScoresScoreCollaboratorsRouteHandler,
  getScoresScoreCommentsRouteHandler,
  getScoresScoreRevisionsRevisionFormatRouteHandler,
  getScoresScoreRevisionsRevisionRouteHandler,
  getScoresScoreRevisionsRouteHandler,
  getScoresScoreRouteHandler,
  getScoresScoreSubmissionsRouteHandler,
  getScoresScoreTracksRouteHandler,
  getScoresScoreTracksTrackRouteHandler,
  getUsersUserLikesRouteHandler,
  getUsersUserRouteHandler,
  getUsersUserScoresRouteHandler,
  postClassesClassActivateRouteHandler,
  postClassesClassArchiveRouteHandler,
  postClassesClassAssignmentsAssignmentArchiveRouteHandler,
  postClassesClassAssignmentsAssignmentCopyRouteHandler,
  postClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsRouteHandler,
  postClassesClassAssignmentsRouteHandler,
  postClassesEnrollEnrollmentCodeRouteHandler,
  postClassesRouteHandler,
  postCollectionsCollectionUntrashRouteHandler,
  postCollectionsRouteHandler,
  postOrganizationsInvitationsRouteHandler,
  postOrganizationsLtiCredentialsRouteHandler,
  postOrganizationsUsersRouteHandler,
  postScoresRouteHandler,
  postScoresScoreCollaboratorsRouteHandler,
  postScoresScoreCommentsRouteHandler,
  postScoresScoreForkRouteHandler,
  postScoresScoreRevisionsRouteHandler,
  postScoresScoreTracksRouteHandler,
  postScoresScoreUntrashRouteHandler,
  putClassesClassAssignmentsAssignmentSubmissionsRouteHandler,
  putClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsCommentRouteHandler,
  putClassesClassAssignmentsAssignmentSubmissionsSubmissionRouteHandler,
  putClassesClassRouteHandler,
  putClassesClassUsersUserRouteHandler,
  putCollectionsCollectionRouteHandler,
  putCollectionsCollectionScoresScoreRouteHandler,
  putOrganizationsUsersUserRouteHandler,
  putScoresScoreCommentsCommentResolvedRouteHandler,
  putScoresScoreCommentsCommentRouteHandler,
  putScoresScoreRouteHandler,
  putScoresScoreTracksTrackRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getClassesRoute, getClassesRouteHandler)
  .openapi(postClassesRoute, postClassesRouteHandler)
  .openapi(postClassesEnrollEnrollmentCodeRoute, postClassesEnrollEnrollmentCodeRouteHandler)
  .openapi(getClassesClassRoute, getClassesClassRouteHandler)
  .openapi(putClassesClassRoute, putClassesClassRouteHandler)
  .openapi(postClassesClassActivateRoute, postClassesClassActivateRouteHandler)
  .openapi(deleteClassesClassArchiveRoute, deleteClassesClassArchiveRouteHandler)
  .openapi(postClassesClassArchiveRoute, postClassesClassArchiveRouteHandler)
  .openapi(getClassesClassAssignmentsRoute, getClassesClassAssignmentsRouteHandler)
  .openapi(postClassesClassAssignmentsRoute, postClassesClassAssignmentsRouteHandler)
  .openapi(
    deleteClassesClassAssignmentsAssignmentArchiveRoute,
    deleteClassesClassAssignmentsAssignmentArchiveRouteHandler,
  )
  .openapi(
    postClassesClassAssignmentsAssignmentArchiveRoute,
    postClassesClassAssignmentsAssignmentArchiveRouteHandler,
  )
  .openapi(
    postClassesClassAssignmentsAssignmentCopyRoute,
    postClassesClassAssignmentsAssignmentCopyRouteHandler,
  )
  .openapi(
    getClassesClassAssignmentsAssignmentSubmissionsRoute,
    getClassesClassAssignmentsAssignmentSubmissionsRouteHandler,
  )
  .openapi(
    putClassesClassAssignmentsAssignmentSubmissionsRoute,
    putClassesClassAssignmentsAssignmentSubmissionsRouteHandler,
  )
  .openapi(
    getClassesClassAssignmentsAssignmentSubmissionsCsvRoute,
    getClassesClassAssignmentsAssignmentSubmissionsCsvRouteHandler,
  )
  .openapi(
    getClassesClassAssignmentsAssignmentSubmissionsExcelRoute,
    getClassesClassAssignmentsAssignmentSubmissionsExcelRouteHandler,
  )
  .openapi(
    deleteClassesClassAssignmentsAssignmentSubmissionsSubmissionRoute,
    deleteClassesClassAssignmentsAssignmentSubmissionsSubmissionRouteHandler,
  )
  .openapi(
    getClassesClassAssignmentsAssignmentSubmissionsSubmissionRoute,
    getClassesClassAssignmentsAssignmentSubmissionsSubmissionRouteHandler,
  )
  .openapi(
    putClassesClassAssignmentsAssignmentSubmissionsSubmissionRoute,
    putClassesClassAssignmentsAssignmentSubmissionsSubmissionRouteHandler,
  )
  .openapi(
    getClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsRoute,
    getClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsRouteHandler,
  )
  .openapi(
    postClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsRoute,
    postClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsRouteHandler,
  )
  .openapi(
    deleteClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsCommentRoute,
    deleteClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsCommentRouteHandler,
  )
  .openapi(
    putClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsCommentRoute,
    putClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsCommentRouteHandler,
  )
  .openapi(
    getClassesClassAssignmentsAssignmentSubmissionsSubmissionHistoryRoute,
    getClassesClassAssignmentsAssignmentSubmissionsSubmissionHistoryRouteHandler,
  )
  .openapi(
    getClassesClassStudentsUserSubmissionsRoute,
    getClassesClassStudentsUserSubmissionsRouteHandler,
  )
  .openapi(deleteClassesClassUsersUserRoute, deleteClassesClassUsersUserRouteHandler)
  .openapi(putClassesClassUsersUserRoute, putClassesClassUsersUserRouteHandler)
  .openapi(getCollectionsRoute, getCollectionsRouteHandler)
  .openapi(postCollectionsRoute, postCollectionsRouteHandler)
  .openapi(deleteCollectionsCollectionRoute, deleteCollectionsCollectionRouteHandler)
  .openapi(getCollectionsCollectionRoute, getCollectionsCollectionRouteHandler)
  .openapi(putCollectionsCollectionRoute, putCollectionsCollectionRouteHandler)
  .openapi(getCollectionsCollectionScoresRoute, getCollectionsCollectionScoresRouteHandler)
  .openapi(
    deleteCollectionsCollectionScoresScoreRoute,
    deleteCollectionsCollectionScoresScoreRouteHandler,
  )
  .openapi(
    putCollectionsCollectionScoresScoreRoute,
    putCollectionsCollectionScoresScoreRouteHandler,
  )
  .openapi(postCollectionsCollectionUntrashRoute, postCollectionsCollectionUntrashRouteHandler)
  .openapi(getGroupsGroupRoute, getGroupsGroupRouteHandler)
  .openapi(getGroupsGroupScoresRoute, getGroupsGroupScoresRouteHandler)
  .openapi(getGroupsGroupUsersRoute, getGroupsGroupUsersRouteHandler)
  .openapi(getMeRoute, getMeRouteHandler)
  .openapi(getOrganizationsInvitationsRoute, getOrganizationsInvitationsRouteHandler)
  .openapi(postOrganizationsInvitationsRoute, postOrganizationsInvitationsRouteHandler)
  .openapi(
    deleteOrganizationsInvitationsInvitationRoute,
    deleteOrganizationsInvitationsInvitationRouteHandler,
  )
  .openapi(getOrganizationsLtiCredentialsRoute, getOrganizationsLtiCredentialsRouteHandler)
  .openapi(postOrganizationsLtiCredentialsRoute, postOrganizationsLtiCredentialsRouteHandler)
  .openapi(
    deleteOrganizationsLtiCredentialsCredentialsRoute,
    deleteOrganizationsLtiCredentialsCredentialsRouteHandler,
  )
  .openapi(getOrganizationsUsersRoute, getOrganizationsUsersRouteHandler)
  .openapi(postOrganizationsUsersRoute, postOrganizationsUsersRouteHandler)
  .openapi(getOrganizationsUsersCountRoute, getOrganizationsUsersCountRouteHandler)
  .openapi(deleteOrganizationsUsersUserRoute, deleteOrganizationsUsersUserRouteHandler)
  .openapi(putOrganizationsUsersUserRoute, putOrganizationsUsersUserRouteHandler)
  .openapi(postScoresRoute, postScoresRouteHandler)
  .openapi(deleteScoresScoreRoute, deleteScoresScoreRouteHandler)
  .openapi(getScoresScoreRoute, getScoresScoreRouteHandler)
  .openapi(putScoresScoreRoute, putScoresScoreRouteHandler)
  .openapi(getScoresScoreCollaboratorsRoute, getScoresScoreCollaboratorsRouteHandler)
  .openapi(postScoresScoreCollaboratorsRoute, postScoresScoreCollaboratorsRouteHandler)
  .openapi(
    deleteScoresScoreCollaboratorsCollaboratorRoute,
    deleteScoresScoreCollaboratorsCollaboratorRouteHandler,
  )
  .openapi(
    getScoresScoreCollaboratorsCollaboratorRoute,
    getScoresScoreCollaboratorsCollaboratorRouteHandler,
  )
  .openapi(getScoresScoreCommentsRoute, getScoresScoreCommentsRouteHandler)
  .openapi(postScoresScoreCommentsRoute, postScoresScoreCommentsRouteHandler)
  .openapi(deleteScoresScoreCommentsCommentRoute, deleteScoresScoreCommentsCommentRouteHandler)
  .openapi(putScoresScoreCommentsCommentRoute, putScoresScoreCommentsCommentRouteHandler)
  .openapi(
    deleteScoresScoreCommentsCommentResolvedRoute,
    deleteScoresScoreCommentsCommentResolvedRouteHandler,
  )
  .openapi(
    putScoresScoreCommentsCommentResolvedRoute,
    putScoresScoreCommentsCommentResolvedRouteHandler,
  )
  .openapi(postScoresScoreForkRoute, postScoresScoreForkRouteHandler)
  .openapi(getScoresScoreRevisionsRoute, getScoresScoreRevisionsRouteHandler)
  .openapi(postScoresScoreRevisionsRoute, postScoresScoreRevisionsRouteHandler)
  .openapi(getScoresScoreRevisionsRevisionRoute, getScoresScoreRevisionsRevisionRouteHandler)
  .openapi(
    getScoresScoreRevisionsRevisionFormatRoute,
    getScoresScoreRevisionsRevisionFormatRouteHandler,
  )
  .openapi(getScoresScoreSubmissionsRoute, getScoresScoreSubmissionsRouteHandler)
  .openapi(getScoresScoreTracksRoute, getScoresScoreTracksRouteHandler)
  .openapi(postScoresScoreTracksRoute, postScoresScoreTracksRouteHandler)
  .openapi(deleteScoresScoreTracksTrackRoute, deleteScoresScoreTracksTrackRouteHandler)
  .openapi(getScoresScoreTracksTrackRoute, getScoresScoreTracksTrackRouteHandler)
  .openapi(putScoresScoreTracksTrackRoute, putScoresScoreTracksTrackRouteHandler)
  .openapi(postScoresScoreUntrashRoute, postScoresScoreUntrashRouteHandler)
  .openapi(getUsersUserRoute, getUsersUserRouteHandler)
  .openapi(getUsersUserLikesRoute, getUsersUserLikesRouteHandler)
  .openapi(getUsersUserScoresRoute, getUsersUserScoresRouteHandler)

export default app
