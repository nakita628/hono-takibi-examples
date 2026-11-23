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
} from './routes'
import {
  deleteV1CoursesCourseIdAliasesAliasRouteHandler,
  deleteV1CoursesCourseIdAnnouncementsIdRouteHandler,
  deleteV1CoursesCourseIdCourseWorkIdRouteHandler,
  deleteV1CoursesCourseIdCourseWorkMaterialsIdRouteHandler,
  deleteV1CoursesCourseIdStudentsUserIdRouteHandler,
  deleteV1CoursesCourseIdTeachersUserIdRouteHandler,
  deleteV1CoursesCourseIdTopicsIdRouteHandler,
  deleteV1CoursesIdRouteHandler,
  deleteV1InvitationsIdRouteHandler,
  deleteV1RegistrationsRegistrationIdRouteHandler,
  deleteV1UserProfilesStudentIdGuardiansGuardianIdRouteHandler,
  getV1CoursesCourseIdAliasesRouteHandler,
  getV1CoursesCourseIdAnnouncementsIdRouteHandler,
  getV1CoursesCourseIdAnnouncementsRouteHandler,
  getV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdRouteHandler,
  getV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsRouteHandler,
  getV1CoursesCourseIdCourseWorkIdRouteHandler,
  getV1CoursesCourseIdCourseWorkMaterialsIdRouteHandler,
  getV1CoursesCourseIdCourseWorkMaterialsRouteHandler,
  getV1CoursesCourseIdCourseWorkRouteHandler,
  getV1CoursesCourseIdStudentsRouteHandler,
  getV1CoursesCourseIdStudentsUserIdRouteHandler,
  getV1CoursesCourseIdTeachersRouteHandler,
  getV1CoursesCourseIdTeachersUserIdRouteHandler,
  getV1CoursesCourseIdTopicsIdRouteHandler,
  getV1CoursesCourseIdTopicsRouteHandler,
  getV1CoursesIdRouteHandler,
  getV1CoursesRouteHandler,
  getV1InvitationsIdRouteHandler,
  getV1InvitationsRouteHandler,
  getV1UserProfilesStudentIdGuardianInvitationsInvitationIdRouteHandler,
  getV1UserProfilesStudentIdGuardianInvitationsRouteHandler,
  getV1UserProfilesStudentIdGuardiansGuardianIdRouteHandler,
  getV1UserProfilesStudentIdGuardiansRouteHandler,
  getV1UserProfilesUserIdRouteHandler,
  patchV1CoursesCourseIdAnnouncementsIdRouteHandler,
  patchV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdRouteHandler,
  patchV1CoursesCourseIdCourseWorkIdRouteHandler,
  patchV1CoursesCourseIdCourseWorkMaterialsIdRouteHandler,
  patchV1CoursesCourseIdTopicsIdRouteHandler,
  patchV1CoursesIdRouteHandler,
  patchV1UserProfilesStudentIdGuardianInvitationsInvitationIdRouteHandler,
  postV1CoursesCourseIdAliasesRouteHandler,
  postV1CoursesCourseIdAnnouncementsIdModifyAssigneesRouteHandler,
  postV1CoursesCourseIdAnnouncementsRouteHandler,
  postV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdModifyAttachmentsRouteHandler,
  postV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdReclaimRouteHandler,
  postV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdReturnRouteHandler,
  postV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdTurnInRouteHandler,
  postV1CoursesCourseIdCourseWorkIdModifyAssigneesRouteHandler,
  postV1CoursesCourseIdCourseWorkMaterialsRouteHandler,
  postV1CoursesCourseIdCourseWorkRouteHandler,
  postV1CoursesCourseIdStudentsRouteHandler,
  postV1CoursesCourseIdTeachersRouteHandler,
  postV1CoursesCourseIdTopicsRouteHandler,
  postV1CoursesRouteHandler,
  postV1InvitationsIdAcceptRouteHandler,
  postV1InvitationsRouteHandler,
  postV1RegistrationsRouteHandler,
  postV1UserProfilesStudentIdGuardianInvitationsRouteHandler,
  putV1CoursesIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1CoursesRoute, getV1CoursesRouteHandler)
  .openapi(postV1CoursesRoute, postV1CoursesRouteHandler)
  .openapi(getV1CoursesCourseIdAliasesRoute, getV1CoursesCourseIdAliasesRouteHandler)
  .openapi(postV1CoursesCourseIdAliasesRoute, postV1CoursesCourseIdAliasesRouteHandler)
  .openapi(
    deleteV1CoursesCourseIdAliasesAliasRoute,
    deleteV1CoursesCourseIdAliasesAliasRouteHandler,
  )
  .openapi(getV1CoursesCourseIdAnnouncementsRoute, getV1CoursesCourseIdAnnouncementsRouteHandler)
  .openapi(postV1CoursesCourseIdAnnouncementsRoute, postV1CoursesCourseIdAnnouncementsRouteHandler)
  .openapi(
    deleteV1CoursesCourseIdAnnouncementsIdRoute,
    deleteV1CoursesCourseIdAnnouncementsIdRouteHandler,
  )
  .openapi(
    getV1CoursesCourseIdAnnouncementsIdRoute,
    getV1CoursesCourseIdAnnouncementsIdRouteHandler,
  )
  .openapi(
    patchV1CoursesCourseIdAnnouncementsIdRoute,
    patchV1CoursesCourseIdAnnouncementsIdRouteHandler,
  )
  .openapi(
    postV1CoursesCourseIdAnnouncementsIdModifyAssigneesRoute,
    postV1CoursesCourseIdAnnouncementsIdModifyAssigneesRouteHandler,
  )
  .openapi(getV1CoursesCourseIdCourseWorkRoute, getV1CoursesCourseIdCourseWorkRouteHandler)
  .openapi(postV1CoursesCourseIdCourseWorkRoute, postV1CoursesCourseIdCourseWorkRouteHandler)
  .openapi(
    getV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsRoute,
    getV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsRouteHandler,
  )
  .openapi(
    getV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdRoute,
    getV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdRouteHandler,
  )
  .openapi(
    patchV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdRoute,
    patchV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdRouteHandler,
  )
  .openapi(
    postV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdModifyAttachmentsRoute,
    postV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdModifyAttachmentsRouteHandler,
  )
  .openapi(
    postV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdReclaimRoute,
    postV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdReclaimRouteHandler,
  )
  .openapi(
    postV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdReturnRoute,
    postV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdReturnRouteHandler,
  )
  .openapi(
    postV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdTurnInRoute,
    postV1CoursesCourseIdCourseWorkCourseWorkIdStudentSubmissionsIdTurnInRouteHandler,
  )
  .openapi(
    deleteV1CoursesCourseIdCourseWorkIdRoute,
    deleteV1CoursesCourseIdCourseWorkIdRouteHandler,
  )
  .openapi(getV1CoursesCourseIdCourseWorkIdRoute, getV1CoursesCourseIdCourseWorkIdRouteHandler)
  .openapi(patchV1CoursesCourseIdCourseWorkIdRoute, patchV1CoursesCourseIdCourseWorkIdRouteHandler)
  .openapi(
    postV1CoursesCourseIdCourseWorkIdModifyAssigneesRoute,
    postV1CoursesCourseIdCourseWorkIdModifyAssigneesRouteHandler,
  )
  .openapi(
    getV1CoursesCourseIdCourseWorkMaterialsRoute,
    getV1CoursesCourseIdCourseWorkMaterialsRouteHandler,
  )
  .openapi(
    postV1CoursesCourseIdCourseWorkMaterialsRoute,
    postV1CoursesCourseIdCourseWorkMaterialsRouteHandler,
  )
  .openapi(
    deleteV1CoursesCourseIdCourseWorkMaterialsIdRoute,
    deleteV1CoursesCourseIdCourseWorkMaterialsIdRouteHandler,
  )
  .openapi(
    getV1CoursesCourseIdCourseWorkMaterialsIdRoute,
    getV1CoursesCourseIdCourseWorkMaterialsIdRouteHandler,
  )
  .openapi(
    patchV1CoursesCourseIdCourseWorkMaterialsIdRoute,
    patchV1CoursesCourseIdCourseWorkMaterialsIdRouteHandler,
  )
  .openapi(getV1CoursesCourseIdStudentsRoute, getV1CoursesCourseIdStudentsRouteHandler)
  .openapi(postV1CoursesCourseIdStudentsRoute, postV1CoursesCourseIdStudentsRouteHandler)
  .openapi(
    deleteV1CoursesCourseIdStudentsUserIdRoute,
    deleteV1CoursesCourseIdStudentsUserIdRouteHandler,
  )
  .openapi(getV1CoursesCourseIdStudentsUserIdRoute, getV1CoursesCourseIdStudentsUserIdRouteHandler)
  .openapi(getV1CoursesCourseIdTeachersRoute, getV1CoursesCourseIdTeachersRouteHandler)
  .openapi(postV1CoursesCourseIdTeachersRoute, postV1CoursesCourseIdTeachersRouteHandler)
  .openapi(
    deleteV1CoursesCourseIdTeachersUserIdRoute,
    deleteV1CoursesCourseIdTeachersUserIdRouteHandler,
  )
  .openapi(getV1CoursesCourseIdTeachersUserIdRoute, getV1CoursesCourseIdTeachersUserIdRouteHandler)
  .openapi(getV1CoursesCourseIdTopicsRoute, getV1CoursesCourseIdTopicsRouteHandler)
  .openapi(postV1CoursesCourseIdTopicsRoute, postV1CoursesCourseIdTopicsRouteHandler)
  .openapi(deleteV1CoursesCourseIdTopicsIdRoute, deleteV1CoursesCourseIdTopicsIdRouteHandler)
  .openapi(getV1CoursesCourseIdTopicsIdRoute, getV1CoursesCourseIdTopicsIdRouteHandler)
  .openapi(patchV1CoursesCourseIdTopicsIdRoute, patchV1CoursesCourseIdTopicsIdRouteHandler)
  .openapi(deleteV1CoursesIdRoute, deleteV1CoursesIdRouteHandler)
  .openapi(getV1CoursesIdRoute, getV1CoursesIdRouteHandler)
  .openapi(patchV1CoursesIdRoute, patchV1CoursesIdRouteHandler)
  .openapi(putV1CoursesIdRoute, putV1CoursesIdRouteHandler)
  .openapi(getV1InvitationsRoute, getV1InvitationsRouteHandler)
  .openapi(postV1InvitationsRoute, postV1InvitationsRouteHandler)
  .openapi(deleteV1InvitationsIdRoute, deleteV1InvitationsIdRouteHandler)
  .openapi(getV1InvitationsIdRoute, getV1InvitationsIdRouteHandler)
  .openapi(postV1InvitationsIdAcceptRoute, postV1InvitationsIdAcceptRouteHandler)
  .openapi(postV1RegistrationsRoute, postV1RegistrationsRouteHandler)
  .openapi(
    deleteV1RegistrationsRegistrationIdRoute,
    deleteV1RegistrationsRegistrationIdRouteHandler,
  )
  .openapi(
    getV1UserProfilesStudentIdGuardianInvitationsRoute,
    getV1UserProfilesStudentIdGuardianInvitationsRouteHandler,
  )
  .openapi(
    postV1UserProfilesStudentIdGuardianInvitationsRoute,
    postV1UserProfilesStudentIdGuardianInvitationsRouteHandler,
  )
  .openapi(
    getV1UserProfilesStudentIdGuardianInvitationsInvitationIdRoute,
    getV1UserProfilesStudentIdGuardianInvitationsInvitationIdRouteHandler,
  )
  .openapi(
    patchV1UserProfilesStudentIdGuardianInvitationsInvitationIdRoute,
    patchV1UserProfilesStudentIdGuardianInvitationsInvitationIdRouteHandler,
  )
  .openapi(
    getV1UserProfilesStudentIdGuardiansRoute,
    getV1UserProfilesStudentIdGuardiansRouteHandler,
  )
  .openapi(
    deleteV1UserProfilesStudentIdGuardiansGuardianIdRoute,
    deleteV1UserProfilesStudentIdGuardiansGuardianIdRouteHandler,
  )
  .openapi(
    getV1UserProfilesStudentIdGuardiansGuardianIdRoute,
    getV1UserProfilesStudentIdGuardiansGuardianIdRouteHandler,
  )
  .openapi(getV1UserProfilesUserIdRoute, getV1UserProfilesUserIdRouteHandler)

export default app
