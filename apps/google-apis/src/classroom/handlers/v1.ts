import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1CoursesCourseIdAliasesAliasRoute,
  deleteV1CoursesCourseIdAnnouncementsIdRoute,
  deleteV1CoursesCourseIdCourseWorkIdRoute,
  deleteV1CoursesCourseIdCourseWorkMaterialsIdRoute,
  deleteV1CoursesCourseIdStudentsUserIdRoute,
  deleteV1CoursesCourseIdTeachersUserIdRoute,
  deleteV1CoursesCourseIdTopicsIdRoute,
  deleteV1CoursesIdRoute,
  deleteV1InvitationsIdRoute,
  deleteV1RegistrationsRegistrationIdRoute,
  deleteV1UserProfilesStudentIdGuardiansGuardianIdRoute,
  getV1CoursesCourseIdAliasesRoute,
  getV1CoursesCourseIdAnnouncementsIdRoute,
  getV1CoursesCourseIdAnnouncementsRoute,
  getV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdRoute,
  getV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsRoute,
  getV1CoursesCourseIdCourseWorkIdRoute,
  getV1CoursesCourseIdCourseWorkMaterialsIdRoute,
  getV1CoursesCourseIdCourseWorkMaterialsRoute,
  getV1CoursesCourseIdCourseWorkRoute,
  getV1CoursesCourseIdStudentsRoute,
  getV1CoursesCourseIdStudentsUserIdRoute,
  getV1CoursesCourseIdTeachersRoute,
  getV1CoursesCourseIdTeachersUserIdRoute,
  getV1CoursesCourseIdTopicsIdRoute,
  getV1CoursesCourseIdTopicsRoute,
  getV1CoursesIdRoute,
  getV1CoursesRoute,
  getV1InvitationsIdRoute,
  getV1InvitationsRoute,
  getV1UserProfilesStudentIdGuardianInvitationsInvitationIdRoute,
  getV1UserProfilesStudentIdGuardianInvitationsRoute,
  getV1UserProfilesStudentIdGuardiansGuardianIdRoute,
  getV1UserProfilesStudentIdGuardiansRoute,
  getV1UserProfilesUserIdRoute,
  patchV1CoursesCourseIdAnnouncementsIdRoute,
  patchV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdRoute,
  patchV1CoursesCourseIdCourseWorkIdRoute,
  patchV1CoursesCourseIdCourseWorkMaterialsIdRoute,
  patchV1CoursesCourseIdTopicsIdRoute,
  patchV1CoursesIdRoute,
  patchV1UserProfilesStudentIdGuardianInvitationsInvitationIdRoute,
  postV1CoursesCourseIdAliasesRoute,
  postV1CoursesCourseIdAnnouncementsIdModifyAssigneesRoute,
  postV1CoursesCourseIdAnnouncementsRoute,
  postV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdModifyAttachmentsRoute,
  postV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdReclaimRoute,
  postV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdReturnRoute,
  postV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdTurnInRoute,
  postV1CoursesCourseIdCourseWorkIdModifyAssigneesRoute,
  postV1CoursesCourseIdCourseWorkMaterialsRoute,
  postV1CoursesCourseIdCourseWorkRoute,
  postV1CoursesCourseIdStudentsRoute,
  postV1CoursesCourseIdTeachersRoute,
  postV1CoursesCourseIdTopicsRoute,
  postV1CoursesRoute,
  postV1InvitationsIdAcceptRoute,
  postV1InvitationsRoute,
  postV1RegistrationsRoute,
  postV1UserProfilesStudentIdGuardianInvitationsRoute,
  putV1CoursesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1CoursesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CoursesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CoursesCourseIdAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CoursesCourseIdAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CoursesCourseIdAliasesAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CoursesCourseIdAnnouncementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CoursesCourseIdAnnouncementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CoursesCourseIdAnnouncementsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CoursesCourseIdAnnouncementsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1CoursesCourseIdAnnouncementsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CoursesCourseIdAnnouncementsIdModifyAssigneesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CoursesCourseIdCourseWorkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CoursesCourseIdCourseWorkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdModifyAttachmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdReclaimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdReturnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdTurnInRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CoursesCourseIdCourseWorkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CoursesCourseIdCourseWorkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1CoursesCourseIdCourseWorkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CoursesCourseIdCourseWorkIdModifyAssigneesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CoursesCourseIdCourseWorkMaterialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CoursesCourseIdCourseWorkMaterialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CoursesCourseIdCourseWorkMaterialsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CoursesCourseIdCourseWorkMaterialsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1CoursesCourseIdCourseWorkMaterialsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CoursesCourseIdStudentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CoursesCourseIdStudentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CoursesCourseIdStudentsUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CoursesCourseIdStudentsUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CoursesCourseIdTeachersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CoursesCourseIdTeachersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CoursesCourseIdTeachersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CoursesCourseIdTeachersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CoursesCourseIdTopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CoursesCourseIdTopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CoursesCourseIdTopicsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CoursesCourseIdTopicsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1CoursesCourseIdTopicsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CoursesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CoursesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1CoursesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CoursesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1InvitationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InvitationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InvitationsIdAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RegistrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1RegistrationsRegistrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UserProfilesStudentIdGuardianInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UserProfilesStudentIdGuardianInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UserProfilesStudentIdGuardianInvitationsInvitationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1UserProfilesStudentIdGuardianInvitationsInvitationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UserProfilesStudentIdGuardiansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1UserProfilesStudentIdGuardiansGuardianIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UserProfilesStudentIdGuardiansGuardianIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UserProfilesUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
