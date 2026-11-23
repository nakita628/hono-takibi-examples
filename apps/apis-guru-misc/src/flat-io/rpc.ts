import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getClasses(
  args: InferRequestType<typeof client.classes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.classes.$get(args, options))
}

export async function postClasses(
  args: InferRequestType<typeof client.classes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.classes.$post(args, options))
}

export async function postClassesEnrollEnrollmentCode(
  args: InferRequestType<(typeof client.classes.enroll)[':enrollmentCode']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.classes.enroll[':enrollmentCode'].$post(args, options))
}

export async function getClassesClass(
  args: InferRequestType<(typeof client.classes)[':class']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.classes[':class'].$get(args, options))
}

export async function putClassesClass(
  args: InferRequestType<(typeof client.classes)[':class']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.classes[':class'].$put(args, options))
}

export async function postClassesClassActivate(
  args: InferRequestType<(typeof client.classes)[':class']['activate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.classes[':class'].activate.$post(args, options))
}

export async function postClassesClassArchive(
  args: InferRequestType<(typeof client.classes)[':class']['archive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.classes[':class'].archive.$post(args, options))
}

export async function deleteClassesClassArchive(
  args: InferRequestType<(typeof client.classes)[':class']['archive']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.classes[':class'].archive.$delete(args, options))
}

export async function getClassesClassAssignments(
  args: InferRequestType<(typeof client.classes)[':class']['assignments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.classes[':class'].assignments.$get(args, options))
}

export async function postClassesClassAssignments(
  args: InferRequestType<(typeof client.classes)[':class']['assignments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.classes[':class'].assignments.$post(args, options))
}

export async function postClassesClassAssignmentsAssignmentArchive(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.classes[':class'].assignments[':assignment'].archive.$post(args, options),
  )
}

export async function deleteClassesClassAssignmentsAssignmentArchive(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['archive']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.classes[':class'].assignments[':assignment'].archive.$delete(args, options),
  )
}

export async function postClassesClassAssignmentsAssignmentCopy(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['copy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.classes[':class'].assignments[':assignment'].copy.$post(args, options),
  )
}

export async function getClassesClassAssignmentsAssignmentSubmissions(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.classes[':class'].assignments[':assignment'].submissions.$get(args, options),
  )
}

export async function putClassesClassAssignmentsAssignmentSubmissions(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.classes[':class'].assignments[':assignment'].submissions.$put(args, options),
  )
}

export async function getClassesClassAssignmentsAssignmentSubmissionsCsv(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['csv']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.classes[':class'].assignments[':assignment'].submissions.csv.$get(args, options),
  )
}

export async function getClassesClassAssignmentsAssignmentSubmissionsExcel(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions']['excel']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.classes[':class'].assignments[':assignment'].submissions.excel.$get(args, options),
  )
}

export async function getClassesClassAssignmentsAssignmentSubmissionsSubmission(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.classes[':class'].assignments[':assignment'].submissions[':submission'].$get(
      args,
      options,
    ),
  )
}

export async function putClassesClassAssignmentsAssignmentSubmissionsSubmission(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.classes[':class'].assignments[':assignment'].submissions[':submission'].$put(
      args,
      options,
    ),
  )
}

export async function deleteClassesClassAssignmentsAssignmentSubmissionsSubmission(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.classes[':class'].assignments[':assignment'].submissions[':submission'].$delete(
      args,
      options,
    ),
  )
}

export async function getClassesClassAssignmentsAssignmentSubmissionsSubmissionComments(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['comments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.classes[':class'].assignments[':assignment'].submissions[':submission'].comments.$get(
      args,
      options,
    ),
  )
}

export async function postClassesClassAssignmentsAssignmentSubmissionsSubmissionComments(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['comments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.classes[':class'].assignments[':assignment'].submissions[':submission'].comments.$post(
      args,
      options,
    ),
  )
}

export async function putClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsComment(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['comments'][':comment']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.classes[':class'].assignments[':assignment'].submissions[':submission'].comments[
      ':comment'
    ].$put(args, options),
  )
}

export async function deleteClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsComment(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['comments'][':comment']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.classes[':class'].assignments[':assignment'].submissions[':submission'].comments[
      ':comment'
    ].$delete(args, options),
  )
}

export async function getClassesClassAssignmentsAssignmentSubmissionsSubmissionHistory(
  args: InferRequestType<
    (typeof client.classes)[':class']['assignments'][':assignment']['submissions'][':submission']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.classes[':class'].assignments[':assignment'].submissions[':submission'].history.$get(
      args,
      options,
    ),
  )
}

export async function getClassesClassStudentsUserSubmissions(
  args: InferRequestType<
    (typeof client.classes)[':class']['students'][':user']['submissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.classes[':class'].students[':user'].submissions.$get(args, options),
  )
}

export async function putClassesClassUsersUser(
  args: InferRequestType<(typeof client.classes)[':class']['users'][':user']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.classes[':class'].users[':user'].$put(args, options))
}

export async function deleteClassesClassUsersUser(
  args: InferRequestType<(typeof client.classes)[':class']['users'][':user']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.classes[':class'].users[':user'].$delete(args, options))
}

export async function getCollections(
  args: InferRequestType<typeof client.collections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections.$get(args, options))
}

export async function postCollections(
  args: InferRequestType<typeof client.collections.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections.$post(args, options))
}

export async function getCollectionsCollection(
  args: InferRequestType<(typeof client.collections)[':collection']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections[':collection'].$get(args, options))
}

export async function putCollectionsCollection(
  args: InferRequestType<(typeof client.collections)[':collection']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections[':collection'].$put(args, options))
}

export async function deleteCollectionsCollection(
  args: InferRequestType<(typeof client.collections)[':collection']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections[':collection'].$delete(args, options))
}

export async function getCollectionsCollectionScores(
  args: InferRequestType<(typeof client.collections)[':collection']['scores']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections[':collection'].scores.$get(args, options))
}

export async function putCollectionsCollectionScoresScore(
  args: InferRequestType<(typeof client.collections)[':collection']['scores'][':score']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections[':collection'].scores[':score'].$put(args, options))
}

export async function deleteCollectionsCollectionScoresScore(
  args: InferRequestType<(typeof client.collections)[':collection']['scores'][':score']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collection'].scores[':score'].$delete(args, options),
  )
}

export async function postCollectionsCollectionUntrash(
  args: InferRequestType<(typeof client.collections)[':collection']['untrash']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections[':collection'].untrash.$post(args, options))
}

export async function getGroupsGroup(
  args: InferRequestType<(typeof client.groups)[':group']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':group'].$get(args, options))
}

export async function getGroupsGroupScores(
  args: InferRequestType<(typeof client.groups)[':group']['scores']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':group'].scores.$get(args, options))
}

export async function getGroupsGroupUsers(
  args: InferRequestType<(typeof client.groups)[':group']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':group'].users.$get(args, options))
}

export async function getMe(
  args: InferRequestType<typeof client.me.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.$get(args, options))
}

export async function getOrganizationsInvitations(
  args: InferRequestType<typeof client.organizations.invitations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations.invitations.$get(args, options))
}

export async function postOrganizationsInvitations(
  args: InferRequestType<typeof client.organizations.invitations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations.invitations.$post(args, options))
}

export async function deleteOrganizationsInvitationsInvitation(
  args: InferRequestType<(typeof client.organizations.invitations)[':invitation']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations.invitations[':invitation'].$delete(args, options))
}

export async function getOrganizationsLtiCredentials(options?: ClientRequestOptions) {
  return await parseResponse(client.organizations.lti.credentials.$get(undefined, options))
}

export async function postOrganizationsLtiCredentials(
  args: InferRequestType<typeof client.organizations.lti.credentials.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations.lti.credentials.$post(args, options))
}

export async function deleteOrganizationsLtiCredentialsCredentials(
  args: InferRequestType<(typeof client.organizations.lti.credentials)[':credentials']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations.lti.credentials[':credentials'].$delete(args, options),
  )
}

export async function getOrganizationsUsers(
  args: InferRequestType<typeof client.organizations.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations.users.$get(args, options))
}

export async function postOrganizationsUsers(
  args: InferRequestType<typeof client.organizations.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations.users.$post(args, options))
}

export async function getOrganizationsUsersCount(
  args: InferRequestType<typeof client.organizations.users.count.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations.users.count.$get(args, options))
}

export async function putOrganizationsUsersUser(
  args: InferRequestType<(typeof client.organizations.users)[':user']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations.users[':user'].$put(args, options))
}

export async function deleteOrganizationsUsersUser(
  args: InferRequestType<(typeof client.organizations.users)[':user']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations.users[':user'].$delete(args, options))
}

export async function postScores(
  args: InferRequestType<typeof client.scores.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scores.$post(args, options))
}

export async function getScoresScore(
  args: InferRequestType<(typeof client.scores)[':score']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scores[':score'].$get(args, options))
}

export async function putScoresScore(
  args: InferRequestType<(typeof client.scores)[':score']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scores[':score'].$put(args, options))
}

export async function deleteScoresScore(
  args: InferRequestType<(typeof client.scores)[':score']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scores[':score'].$delete(args, options))
}

export async function getScoresScoreCollaborators(
  args: InferRequestType<(typeof client.scores)[':score']['collaborators']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scores[':score'].collaborators.$get(args, options))
}

export async function postScoresScoreCollaborators(
  args: InferRequestType<(typeof client.scores)[':score']['collaborators']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scores[':score'].collaborators.$post(args, options))
}

export async function getScoresScoreCollaboratorsCollaborator(
  args: InferRequestType<
    (typeof client.scores)[':score']['collaborators'][':collaborator']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.scores[':score'].collaborators[':collaborator'].$get(args, options),
  )
}

export async function deleteScoresScoreCollaboratorsCollaborator(
  args: InferRequestType<
    (typeof client.scores)[':score']['collaborators'][':collaborator']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.scores[':score'].collaborators[':collaborator'].$delete(args, options),
  )
}

export async function getScoresScoreComments(
  args: InferRequestType<(typeof client.scores)[':score']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scores[':score'].comments.$get(args, options))
}

export async function postScoresScoreComments(
  args: InferRequestType<(typeof client.scores)[':score']['comments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scores[':score'].comments.$post(args, options))
}

export async function putScoresScoreCommentsComment(
  args: InferRequestType<(typeof client.scores)[':score']['comments'][':comment']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scores[':score'].comments[':comment'].$put(args, options))
}

export async function deleteScoresScoreCommentsComment(
  args: InferRequestType<(typeof client.scores)[':score']['comments'][':comment']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scores[':score'].comments[':comment'].$delete(args, options))
}

export async function putScoresScoreCommentsCommentResolved(
  args: InferRequestType<
    (typeof client.scores)[':score']['comments'][':comment']['resolved']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.scores[':score'].comments[':comment'].resolved.$put(args, options),
  )
}

export async function deleteScoresScoreCommentsCommentResolved(
  args: InferRequestType<
    (typeof client.scores)[':score']['comments'][':comment']['resolved']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.scores[':score'].comments[':comment'].resolved.$delete(args, options),
  )
}

export async function postScoresScoreFork(
  args: InferRequestType<(typeof client.scores)[':score']['fork']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scores[':score'].fork.$post(args, options))
}

export async function getScoresScoreRevisions(
  args: InferRequestType<(typeof client.scores)[':score']['revisions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scores[':score'].revisions.$get(args, options))
}

export async function postScoresScoreRevisions(
  args: InferRequestType<(typeof client.scores)[':score']['revisions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scores[':score'].revisions.$post(args, options))
}

export async function getScoresScoreRevisionsRevision(
  args: InferRequestType<(typeof client.scores)[':score']['revisions'][':revision']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scores[':score'].revisions[':revision'].$get(args, options))
}

export async function getScoresScoreRevisionsRevisionFormat(
  args: InferRequestType<
    (typeof client.scores)[':score']['revisions'][':revision'][':format']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.scores[':score'].revisions[':revision'][':format'].$get(args, options),
  )
}

export async function getScoresScoreSubmissions(
  args: InferRequestType<(typeof client.scores)[':score']['submissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scores[':score'].submissions.$get(args, options))
}

export async function getScoresScoreTracks(
  args: InferRequestType<(typeof client.scores)[':score']['tracks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scores[':score'].tracks.$get(args, options))
}

export async function postScoresScoreTracks(
  args: InferRequestType<(typeof client.scores)[':score']['tracks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scores[':score'].tracks.$post(args, options))
}

export async function getScoresScoreTracksTrack(
  args: InferRequestType<(typeof client.scores)[':score']['tracks'][':track']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scores[':score'].tracks[':track'].$get(args, options))
}

export async function putScoresScoreTracksTrack(
  args: InferRequestType<(typeof client.scores)[':score']['tracks'][':track']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scores[':score'].tracks[':track'].$put(args, options))
}

export async function deleteScoresScoreTracksTrack(
  args: InferRequestType<(typeof client.scores)[':score']['tracks'][':track']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scores[':score'].tracks[':track'].$delete(args, options))
}

export async function postScoresScoreUntrash(
  args: InferRequestType<(typeof client.scores)[':score']['untrash']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scores[':score'].untrash.$post(args, options))
}

export async function getUsersUser(
  args: InferRequestType<(typeof client.users)[':user']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user'].$get(args, options))
}

export async function getUsersUserLikes(
  args: InferRequestType<(typeof client.users)[':user']['likes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user'].likes.$get(args, options))
}

export async function getUsersUserScores(
  args: InferRequestType<(typeof client.users)[':user']['scores']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user'].scores.$get(args, options))
}
