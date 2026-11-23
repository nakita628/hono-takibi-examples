import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1Courses(
  args: InferRequestType<typeof client.v1.courses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.courses.$get(args, options))
}

export async function postV1Courses(
  args: InferRequestType<typeof client.v1.courses.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.courses.$post(args, options))
}

export async function getV1CoursesCourseIdAliases(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['aliases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.courses[':courseId'].aliases.$get(args, options))
}

export async function postV1CoursesCourseIdAliases(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['aliases']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.courses[':courseId'].aliases.$post(args, options))
}

export async function deleteV1CoursesCourseIdAliasesAlias(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['aliases'][':alias']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.courses[':courseId'].aliases[':alias'].$delete(args, options),
  )
}

export async function getV1CoursesCourseIdAnnouncements(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['announcements']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.courses[':courseId'].announcements.$get(args, options))
}

export async function postV1CoursesCourseIdAnnouncements(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['announcements']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.courses[':courseId'].announcements.$post(args, options))
}

export async function getV1CoursesCourseIdAnnouncementsId(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['announcements'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.courses[':courseId'].announcements[':id'].$get(args, options),
  )
}

export async function deleteV1CoursesCourseIdAnnouncementsId(
  args: InferRequestType<
    (typeof client.v1.courses)[':courseId']['announcements'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.courses[':courseId'].announcements[':id'].$delete(args, options),
  )
}

export async function patchV1CoursesCourseIdAnnouncementsId(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['announcements'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.courses[':courseId'].announcements[':id'].$patch(args, options),
  )
}

export async function postV1CoursesCourseIdAnnouncementsIdModifyAssignees(
  args: InferRequestType<
    (typeof client.v1.courses)[':courseId']['announcements'][':id:modifyAssignees']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.courses[':courseId'].announcements[':id:modifyAssignees'].$post(args, options),
  )
}

export async function getV1CoursesCourseIdCourseWork(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['courseWork']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.courses[':courseId'].courseWork.$get(args, options))
}

export async function postV1CoursesCourseIdCourseWork(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['courseWork']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.courses[':courseId'].courseWork.$post(args, options))
}

export async function getV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissions(
  args: InferRequestType<
    (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.courses[':courseId'].courseWork[':courseWorkId'].studentSubmissions.$get(
      args,
      options,
    ),
  )
}

export async function getV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsId(
  args: InferRequestType<
    (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.courses[':courseId'].courseWork[':courseWorkId'].studentSubmissions[':id'].$get(
      args,
      options,
    ),
  )
}

export async function patchV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsId(
  args: InferRequestType<
    (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.courses[':courseId'].courseWork[':courseWorkId'].studentSubmissions[':id'].$patch(
      args,
      options,
    ),
  )
}

export async function postV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdModifyAttachments(
  args: InferRequestType<
    (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id:modifyAttachments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.courses[':courseId'].courseWork[':courseWorkId'].studentSubmissions[
      ':id:modifyAttachments'
    ].$post(args, options),
  )
}

export async function postV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdReclaim(
  args: InferRequestType<
    (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id:reclaim']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.courses[':courseId'].courseWork[':courseWorkId'].studentSubmissions[
      ':id:reclaim'
    ].$post(args, options),
  )
}

export async function postV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdReturn(
  args: InferRequestType<
    (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id:return']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.courses[':courseId'].courseWork[':courseWorkId'].studentSubmissions[
      ':id:return'
    ].$post(args, options),
  )
}

export async function postV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdTurnIn(
  args: InferRequestType<
    (typeof client.v1.courses)[':courseId']['courseWork'][':courseWorkId']['studentSubmissions'][':id:turnIn']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.courses[':courseId'].courseWork[':courseWorkId'].studentSubmissions[
      ':id:turnIn'
    ].$post(args, options),
  )
}

export async function getV1CoursesCourseIdCourseWorkId(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['courseWork'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.courses[':courseId'].courseWork[':id'].$get(args, options))
}

export async function deleteV1CoursesCourseIdCourseWorkId(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['courseWork'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.courses[':courseId'].courseWork[':id'].$delete(args, options),
  )
}

export async function patchV1CoursesCourseIdCourseWorkId(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['courseWork'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.courses[':courseId'].courseWork[':id'].$patch(args, options))
}

export async function postV1CoursesCourseIdCourseWorkIdModifyAssignees(
  args: InferRequestType<
    (typeof client.v1.courses)[':courseId']['courseWork'][':id:modifyAssignees']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.courses[':courseId'].courseWork[':id:modifyAssignees'].$post(args, options),
  )
}

export async function getV1CoursesCourseIdCourseWorkMaterials(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['courseWorkMaterials']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.courses[':courseId'].courseWorkMaterials.$get(args, options))
}

export async function postV1CoursesCourseIdCourseWorkMaterials(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['courseWorkMaterials']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.courses[':courseId'].courseWorkMaterials.$post(args, options),
  )
}

export async function getV1CoursesCourseIdCourseWorkMaterialsId(
  args: InferRequestType<
    (typeof client.v1.courses)[':courseId']['courseWorkMaterials'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.courses[':courseId'].courseWorkMaterials[':id'].$get(args, options),
  )
}

export async function deleteV1CoursesCourseIdCourseWorkMaterialsId(
  args: InferRequestType<
    (typeof client.v1.courses)[':courseId']['courseWorkMaterials'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.courses[':courseId'].courseWorkMaterials[':id'].$delete(args, options),
  )
}

export async function patchV1CoursesCourseIdCourseWorkMaterialsId(
  args: InferRequestType<
    (typeof client.v1.courses)[':courseId']['courseWorkMaterials'][':id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.courses[':courseId'].courseWorkMaterials[':id'].$patch(args, options),
  )
}

export async function getV1CoursesCourseIdStudents(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['students']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.courses[':courseId'].students.$get(args, options))
}

export async function postV1CoursesCourseIdStudents(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['students']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.courses[':courseId'].students.$post(args, options))
}

export async function getV1CoursesCourseIdStudentsUserId(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['students'][':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.courses[':courseId'].students[':userId'].$get(args, options))
}

export async function deleteV1CoursesCourseIdStudentsUserId(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['students'][':userId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.courses[':courseId'].students[':userId'].$delete(args, options),
  )
}

export async function getV1CoursesCourseIdTeachers(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['teachers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.courses[':courseId'].teachers.$get(args, options))
}

export async function postV1CoursesCourseIdTeachers(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['teachers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.courses[':courseId'].teachers.$post(args, options))
}

export async function getV1CoursesCourseIdTeachersUserId(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['teachers'][':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.courses[':courseId'].teachers[':userId'].$get(args, options))
}

export async function deleteV1CoursesCourseIdTeachersUserId(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['teachers'][':userId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.courses[':courseId'].teachers[':userId'].$delete(args, options),
  )
}

export async function getV1CoursesCourseIdTopics(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['topics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.courses[':courseId'].topics.$get(args, options))
}

export async function postV1CoursesCourseIdTopics(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['topics']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.courses[':courseId'].topics.$post(args, options))
}

export async function getV1CoursesCourseIdTopicsId(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['topics'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.courses[':courseId'].topics[':id'].$get(args, options))
}

export async function deleteV1CoursesCourseIdTopicsId(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['topics'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.courses[':courseId'].topics[':id'].$delete(args, options))
}

export async function patchV1CoursesCourseIdTopicsId(
  args: InferRequestType<(typeof client.v1.courses)[':courseId']['topics'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.courses[':courseId'].topics[':id'].$patch(args, options))
}

export async function getV1CoursesId(
  args: InferRequestType<(typeof client.v1.courses)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.courses[':id'].$get(args, options))
}

export async function putV1CoursesId(
  args: InferRequestType<(typeof client.v1.courses)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.courses[':id'].$put(args, options))
}

export async function deleteV1CoursesId(
  args: InferRequestType<(typeof client.v1.courses)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.courses[':id'].$delete(args, options))
}

export async function patchV1CoursesId(
  args: InferRequestType<(typeof client.v1.courses)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.courses[':id'].$patch(args, options))
}

export async function getV1Invitations(
  args: InferRequestType<typeof client.v1.invitations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.invitations.$get(args, options))
}

export async function postV1Invitations(
  args: InferRequestType<typeof client.v1.invitations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.invitations.$post(args, options))
}

export async function getV1InvitationsId(
  args: InferRequestType<(typeof client.v1.invitations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.invitations[':id'].$get(args, options))
}

export async function deleteV1InvitationsId(
  args: InferRequestType<(typeof client.v1.invitations)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.invitations[':id'].$delete(args, options))
}

export async function postV1InvitationsIdAccept(
  args: InferRequestType<(typeof client.v1.invitations)[':id:accept']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.invitations[':id:accept'].$post(args, options))
}

export async function postV1Registrations(
  args: InferRequestType<typeof client.v1.registrations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.registrations.$post(args, options))
}

export async function deleteV1RegistrationsRegistrationId(
  args: InferRequestType<(typeof client.v1.registrations)[':registrationId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.registrations[':registrationId'].$delete(args, options))
}

export async function getV1UserProfilesStudentIdGuardianInvitations(
  args: InferRequestType<
    (typeof client.v1.userProfiles)[':studentId']['guardianInvitations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.userProfiles[':studentId'].guardianInvitations.$get(args, options),
  )
}

export async function postV1UserProfilesStudentIdGuardianInvitations(
  args: InferRequestType<
    (typeof client.v1.userProfiles)[':studentId']['guardianInvitations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.userProfiles[':studentId'].guardianInvitations.$post(args, options),
  )
}

export async function getV1UserProfilesStudentIdGuardianInvitationsInvitationId(
  args: InferRequestType<
    (typeof client.v1.userProfiles)[':studentId']['guardianInvitations'][':invitationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.userProfiles[':studentId'].guardianInvitations[':invitationId'].$get(args, options),
  )
}

export async function patchV1UserProfilesStudentIdGuardianInvitationsInvitationId(
  args: InferRequestType<
    (typeof client.v1.userProfiles)[':studentId']['guardianInvitations'][':invitationId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.userProfiles[':studentId'].guardianInvitations[':invitationId'].$patch(args, options),
  )
}

export async function getV1UserProfilesStudentIdGuardians(
  args: InferRequestType<(typeof client.v1.userProfiles)[':studentId']['guardians']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.userProfiles[':studentId'].guardians.$get(args, options))
}

export async function getV1UserProfilesStudentIdGuardiansGuardianId(
  args: InferRequestType<
    (typeof client.v1.userProfiles)[':studentId']['guardians'][':guardianId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.userProfiles[':studentId'].guardians[':guardianId'].$get(args, options),
  )
}

export async function deleteV1UserProfilesStudentIdGuardiansGuardianId(
  args: InferRequestType<
    (typeof client.v1.userProfiles)[':studentId']['guardians'][':guardianId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.userProfiles[':studentId'].guardians[':guardianId'].$delete(args, options),
  )
}

export async function getV1UserProfilesUserId(
  args: InferRequestType<(typeof client.v1.userProfiles)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.userProfiles[':userId'].$get(args, options))
}
