import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function get(options?: ClientRequestOptions) {
  return await parseResponse(client.index.$get(undefined, options))
}

export async function getCourseMappings(options?: ClientRequestOptions) {
  return await parseResponse(client['course-mappings'].$get(undefined, options))
}

export async function getCourseMappingsExternalcourseExternalCourseId(
  args: InferRequestType<
    (typeof client)['course-mappings']['externalcourse'][':externalCourseId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['course-mappings'].externalcourse[':externalCourseId'].$get(args, options),
  )
}

export async function getCourseMappingsOfferingId(
  args: InferRequestType<(typeof client)['course-mappings'][':offeringId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['course-mappings'][':offeringId'].$get(args, options))
}

export async function putCourseMappingsOfferingIdExternalCourseId(
  args: InferRequestType<
    (typeof client)['course-mappings'][':offeringId'][':externalCourseId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['course-mappings'][':offeringId'][':externalCourseId'].$put(args, options),
  )
}

export async function deleteCourseMappingsOfferingIdExternalCourseId(
  args: InferRequestType<
    (typeof client)['course-mappings'][':offeringId'][':externalCourseId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['course-mappings'][':offeringId'][':externalCourseId'].$delete(args, options),
  )
}

export async function getCourses(options?: ClientRequestOptions) {
  return await parseResponse(client.courses.$get(undefined, options))
}

export async function getCoursesContentId(
  args: InferRequestType<(typeof client.courses)[':contentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.courses[':contentId'].$get(args, options))
}

export async function getCoursesContentIdActivations(
  args: InferRequestType<(typeof client.courses)[':contentId']['activations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.courses[':contentId'].activations.$get(args, options))
}

export async function putCoursesContentIdMetadataCategory(
  args: InferRequestType<(typeof client.courses)[':contentId']['metadata']['category']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.courses[':contentId'].metadata.category.$put(args, options))
}

export async function putCoursesContentIdMetadataLevel(
  args: InferRequestType<(typeof client.courses)[':contentId']['metadata']['level']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.courses[':contentId'].metadata.level.$put(args, options))
}

export async function putCoursesContentIdMetadataTags(
  args: InferRequestType<(typeof client.courses)[':contentId']['metadata']['tags']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.courses[':contentId'].metadata.tags.$put(args, options))
}

export async function putCoursesContentIdMetadataTopic(
  args: InferRequestType<(typeof client.courses)[':contentId']['metadata']['topic']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.courses[':contentId'].metadata.topic.$put(args, options))
}

export async function getCoursesContentIdPermissions(
  args: InferRequestType<(typeof client.courses)[':contentId']['permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.courses[':contentId'].permissions.$get(args, options))
}

export async function postCoursesRootContentIdPermissionsUserEmail(
  args: InferRequestType<
    (typeof client.courses)[':rootContentId']['permissions'][':userEmail']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.courses[':rootContentId'].permissions[':userEmail'].$post(args, options),
  )
}

export async function getOfferings(options?: ClientRequestOptions) {
  return await parseResponse(client.offerings.$get(undefined, options))
}

export async function postOfferings(
  args: InferRequestType<typeof client.offerings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.offerings.$post(args, options))
}

export async function getOfferingsCurrent(options?: ClientRequestOptions) {
  return await parseResponse(client.offerings.current.$get(undefined, options))
}

export async function getOfferingsFuture(options?: ClientRequestOptions) {
  return await parseResponse(client.offerings.future.$get(undefined, options))
}

export async function getOfferingsInfoTextPattern(
  args: InferRequestType<(typeof client.offerings.info)[':textPattern']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.offerings.info[':textPattern'].$get(args, options))
}

export async function getOfferingsPast(options?: ClientRequestOptions) {
  return await parseResponse(client.offerings.past.$get(undefined, options))
}

export async function getOfferingsSummary(
  args: InferRequestType<typeof client.offerings.summary.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.offerings.summary.$get(args, options))
}

export async function getOfferingsOfferingId(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.offerings[':offeringId'].$get(args, options))
}

export async function patchOfferingsOfferingId(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.offerings[':offeringId'].$patch(args, options))
}

export async function getOfferingsOfferingIdActivitiesOpenresponse(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['activities']['openresponse']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.offerings[':offeringId'].activities.openresponse.$get(args, options),
  )
}

export async function getOfferingsOfferingIdAnalyticsActivitiesResponses(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['activities']['responses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.offerings[':offeringId'].analytics.activities.responses.$get(args, options),
  )
}

export async function getOfferingsOfferingIdAnalyticsChannelsChannelIdComments(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['channels'][':channelId']['comments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.offerings[':offeringId'].analytics.channels[':channelId'].comments.$get(args, options),
  )
}

export async function getOfferingsOfferingIdAnalyticsChannelsChannelIdPosts(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['channels'][':channelId']['posts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.offerings[':offeringId'].analytics.channels[':channelId'].posts.$get(args, options),
  )
}

export async function getOfferingsOfferingIdAnalyticsChannelsChannelIdReplies(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['channels'][':channelId']['replies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.offerings[':offeringId'].analytics.channels[':channelId'].replies.$get(args, options),
  )
}

export async function getOfferingsOfferingIdAnalyticsLearnersProgress(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['learners-progress']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.offerings[':offeringId'].analytics['learners-progress'].$get(args, options),
  )
}

export async function getOfferingsOfferingIdAnalyticsMarksAssignments(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['marks']['assignments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.offerings[':offeringId'].analytics.marks.assignments.$get(args, options),
  )
}

export async function getOfferingsOfferingIdAnalyticsMarksQuizzes(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['marks']['quizzes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.offerings[':offeringId'].analytics.marks.quizzes.$get(args, options),
  )
}

export async function getOfferingsOfferingIdAnalyticsPulses(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['analytics']['pulses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.offerings[':offeringId'].analytics.pulses.$get(args, options))
}

export async function getOfferingsOfferingIdAnalyticsPulsesResponses(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['pulses']['responses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.offerings[':offeringId'].analytics.pulses.responses.$get(args, options),
  )
}

export async function getOfferingsOfferingIdAnalyticsPulsesPulseIdResponses(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['pulses'][':pulseId']['responses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.offerings[':offeringId'].analytics.pulses[':pulseId'].responses.$get(args, options),
  )
}

export async function getOfferingsOfferingIdAnalyticsSocialNotes(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['social-notes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.offerings[':offeringId'].analytics['social-notes'].$get(args, options),
  )
}

export async function getOfferingsOfferingIdAnalyticsSubmissionsAssignments(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['submissions']['assignments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.offerings[':offeringId'].analytics.submissions.assignments.$get(args, options),
  )
}

export async function getOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentId(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['submissions']['open-response'][':assessmentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.offerings[':offeringId'].analytics.submissions['open-response'][':assessmentId'].$get(
      args,
      options,
    ),
  )
}

export async function getOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentId(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['submissions'][':userEmail']['assignments'][':assessmentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.offerings[':offeringId'].analytics.submissions[':userEmail'].assignments[
      ':assessmentId'
    ].$get(args, options),
  )
}

export async function getOfferingsOfferingIdAnalyticsUnitReactions(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['analytics']['unit-reactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.offerings[':offeringId'].analytics['unit-reactions'].$get(args, options),
  )
}

export async function getOfferingsOfferingIdAssessments(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['assessments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.offerings[':offeringId'].assessments.$get(args, options))
}

export async function patchOfferingsOfferingIdAssessmentsAssessmentId(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['assessments'][':assessmentId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.offerings[':offeringId'].assessments[':assessmentId'].$patch(args, options),
  )
}

export async function deleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentId(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['assessments'][':assessmentId']['documents'][':documentId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.offerings[':offeringId'].assessments[':assessmentId'].documents[':documentId'].$delete(
      args,
      options,
    ),
  )
}

export async function patchOfferingsOfferingIdAssessmentsAssessmentIdUserEmail(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['assessments'][':assessmentId'][':userEmail']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.offerings[':offeringId'].assessments[':assessmentId'][':userEmail'].$patch(
      args,
      options,
    ),
  )
}

export async function getOfferingsOfferingIdBadges(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['badges']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.offerings[':offeringId'].badges.$get(args, options))
}

export async function getOfferingsOfferingIdChannels(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['channels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.offerings[':offeringId'].channels.$get(args, options))
}

export async function postOfferingsOfferingIdChannels(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['channels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.offerings[':offeringId'].channels.$post(args, options))
}

export async function patchOfferingsOfferingIdChannelsChannelId(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['channels'][':channelId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.offerings[':offeringId'].channels[':channelId'].$patch(args, options),
  )
}

export async function getOfferingsOfferingIdChannelsChannelIdLearners(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['channels'][':channelId']['learners']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.offerings[':offeringId'].channels[':channelId'].learners.$get(args, options),
  )
}

export async function postOfferingsOfferingIdChannelsChannelIdLearners(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['channels'][':channelId']['learners']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.offerings[':offeringId'].channels[':channelId'].learners.$post(args, options),
  )
}

export async function deleteOfferingsOfferingIdChannelsChannelIdLearners(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['channels'][':channelId']['learners']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.offerings[':offeringId'].channels[':channelId'].learners.$delete(args, options),
  )
}

export async function getOfferingsOfferingIdGroups(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.offerings[':offeringId'].groups.$get(args, options))
}

export async function postOfferingsOfferingIdGroups(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.offerings[':offeringId'].groups.$post(args, options))
}

export async function getOfferingsOfferingIdGroupsGroupIdLearners(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['groups'][':groupId']['learners']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.offerings[':offeringId'].groups[':groupId'].learners.$get(args, options),
  )
}

export async function postOfferingsOfferingIdGroupsGroupIdLearners(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['groups'][':groupId']['learners']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.offerings[':offeringId'].groups[':groupId'].learners.$post(args, options),
  )
}

export async function deleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmail(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['groups'][':groupId']['learners'][':userEmail']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.offerings[':offeringId'].groups[':groupId'].learners[':userEmail'].$delete(
      args,
      options,
    ),
  )
}

export async function getOfferingsOfferingIdLearnersPendingSubmission(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['learners']['pending-submission']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.offerings[':offeringId'].learners['pending-submission'].$get(args, options),
  )
}

export async function putOfferingsOfferingIdMetadataCategory(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['metadata']['category']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.offerings[':offeringId'].metadata.category.$put(args, options))
}

export async function putOfferingsOfferingIdMetadataLevel(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['metadata']['level']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.offerings[':offeringId'].metadata.level.$put(args, options))
}

export async function putOfferingsOfferingIdMetadataTags(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['metadata']['tags']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.offerings[':offeringId'].metadata.tags.$put(args, options))
}

export async function putOfferingsOfferingIdMetadataTopic(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['metadata']['topic']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.offerings[':offeringId'].metadata.topic.$put(args, options))
}

export async function getOfferingsOfferingIdUsers(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.offerings[':offeringId'].users.$get(args, options))
}

export async function postOfferingsOfferingIdUsers(
  args: InferRequestType<(typeof client.offerings)[':offeringId']['users']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.offerings[':offeringId'].users.$post(args, options))
}

export async function getOfferingsOfferingIdUsersMarkerEmailMarks(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['users'][':markerEmail']['marks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.offerings[':offeringId'].users[':markerEmail'].marks.$get(args, options),
  )
}

export async function postOfferingsOfferingIdUsersMarkerEmailMarks(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['users'][':markerEmail']['marks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.offerings[':offeringId'].users[':markerEmail'].marks.$post(args, options),
  )
}

export async function deleteOfferingsOfferingIdUsersMarkerEmailMarks(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['users'][':markerEmail']['marks']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.offerings[':offeringId'].users[':markerEmail'].marks.$delete(args, options),
  )
}

export async function deleteOfferingsOfferingIdUsersUserEmail(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['users'][':userEmail']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.offerings[':offeringId'].users[':userEmail'].$delete(args, options),
  )
}

export async function deleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentId(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['users'][':userEmail']['assessments'][':assessmentId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.offerings[':offeringId'].users[':userEmail'].assessments[':assessmentId'].$delete(
      args,
      options,
    ),
  )
}

export async function postOfferingsOfferingIdUsersUserEmailBadgesAward(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['users'][':userEmail']['badges']['award']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.offerings[':offeringId'].users[':userEmail'].badges.award.$post(args, options),
  )
}

export async function getOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponse(
  args: InferRequestType<
    (typeof client.offerings)[':offeringId']['users'][':userEmail']['submissions']['open-response']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.offerings[':offeringId'].users[':userEmail'].submissions['open-response'].$get(
      args,
      options,
    ),
  )
}

export async function getOrg(options?: ClientRequestOptions) {
  return await parseResponse(client.org.$get(undefined, options))
}

export async function postUsers(
  args: InferRequestType<typeof client.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$post(args, options))
}

export async function getUsersAllProgress(
  args: InferRequestType<typeof client.users.all.progress.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.all.progress.$get(args, options))
}

export async function getUsersUserEmail(
  args: InferRequestType<(typeof client.users)[':userEmail']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userEmail'].$get(args, options))
}

export async function patchUsersUserEmail(
  args: InferRequestType<(typeof client.users)[':userEmail']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userEmail'].$patch(args, options))
}

export async function getUsersUserEmailBadges(
  args: InferRequestType<(typeof client.users)[':userEmail']['badges']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userEmail'].badges.$get(args, options))
}

export async function postUsersUserEmailInviteEmail(
  args: InferRequestType<(typeof client.users)[':userEmail']['invite-email']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userEmail']['invite-email'].$post(args, options))
}

export async function getUsersUserEmailOfferings(
  args: InferRequestType<(typeof client.users)[':userEmail']['offerings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userEmail'].offerings.$get(args, options))
}

export async function postUsersUserEmailOfferings(
  args: InferRequestType<(typeof client.users)[':userEmail']['offerings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userEmail'].offerings.$post(args, options))
}

export async function getUsersUserEmailOfferingsOfferingIdProgress(
  args: InferRequestType<
    (typeof client.users)[':userEmail']['offerings'][':offeringId']['progress']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':userEmail'].offerings[':offeringId'].progress.$get(args, options),
  )
}

export async function postUsersUserEmailPermissionsPermissionName(
  args: InferRequestType<
    (typeof client.users)[':userEmail']['permissions'][':permissionName']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':userEmail'].permissions[':permissionName'].$post(args, options),
  )
}

export async function getUsersUserEmailProgress(
  args: InferRequestType<(typeof client.users)[':userEmail']['progress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userEmail'].progress.$get(args, options))
}

export async function putUsersUserEmailSuspend(
  args: InferRequestType<(typeof client.users)[':userEmail']['suspend']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userEmail'].suspend.$put(args, options))
}

export async function patchUsersUserEmailTransfer(
  args: InferRequestType<(typeof client.users)[':userEmail']['transfer']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userEmail'].transfer.$patch(args, options))
}
