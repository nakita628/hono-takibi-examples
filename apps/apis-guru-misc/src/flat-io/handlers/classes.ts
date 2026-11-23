import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteClassesClassArchiveRoute,
  deleteClassesClassAssignmentsAssignmentArchiveRoute,
  deleteClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsCommentRoute,
  deleteClassesClassAssignmentsAssignmentSubmissionsSubmissionRoute,
  deleteClassesClassUsersUserRoute,
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
  postClassesClassActivateRoute,
  postClassesClassArchiveRoute,
  postClassesClassAssignmentsAssignmentArchiveRoute,
  postClassesClassAssignmentsAssignmentCopyRoute,
  postClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsRoute,
  postClassesClassAssignmentsRoute,
  postClassesEnrollEnrollmentCodeRoute,
  postClassesRoute,
  putClassesClassAssignmentsAssignmentSubmissionsRoute,
  putClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsCommentRoute,
  putClassesClassAssignmentsAssignmentSubmissionsSubmissionRoute,
  putClassesClassRoute,
  putClassesClassUsersUserRoute,
} from '../routes'

const app = new OpenAPIHono()

export const classesHandler = app
  .openapi(getClassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClassesEnrollEnrollmentCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClassesClassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putClassesClassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClassesClassActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteClassesClassArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClassesClassArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClassesClassAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClassesClassAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteClassesClassAssignmentsAssignmentArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClassesClassAssignmentsAssignmentArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClassesClassAssignmentsAssignmentCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClassesClassAssignmentsAssignmentSubmissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putClassesClassAssignmentsAssignmentSubmissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClassesClassAssignmentsAssignmentSubmissionsCsvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClassesClassAssignmentsAssignmentSubmissionsExcelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteClassesClassAssignmentsAssignmentSubmissionsSubmissionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClassesClassAssignmentsAssignmentSubmissionsSubmissionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putClassesClassAssignmentsAssignmentSubmissionsSubmissionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsCommentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(putClassesClassAssignmentsAssignmentSubmissionsSubmissionCommentsCommentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClassesClassAssignmentsAssignmentSubmissionsSubmissionHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClassesClassStudentsUserSubmissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteClassesClassUsersUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putClassesClassUsersUserRoute, (c) => {
    throw new Error('Not implemented')
  })
