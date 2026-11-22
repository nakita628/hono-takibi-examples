import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEducationReportsReadingAssignmentSubmissionsReadingAssignmentSubmissionIdRoute,
  deleteEducationReportsReadingCoachPassagesReadingCoachPassageIdRoute,
  deleteEducationReportsReflectCheckInResponsesReflectCheckInResponseIdRoute,
  deleteEducationReportsRoute,
  deleteEducationReportsSpeakerAssignmentSubmissionsSpeakerAssignmentSubmissionIdRoute,
  getEducationReportsReadingAssignmentSubmissionsCountRoute,
  getEducationReportsReadingAssignmentSubmissionsReadingAssignmentSubmissionIdRoute,
  getEducationReportsReadingAssignmentSubmissionsRoute,
  getEducationReportsReadingCoachPassagesCountRoute,
  getEducationReportsReadingCoachPassagesReadingCoachPassageIdRoute,
  getEducationReportsReadingCoachPassagesRoute,
  getEducationReportsReflectCheckInResponsesCountRoute,
  getEducationReportsReflectCheckInResponsesReflectCheckInResponseIdRoute,
  getEducationReportsReflectCheckInResponsesRoute,
  getEducationReportsRoute,
  getEducationReportsSpeakerAssignmentSubmissionsCountRoute,
  getEducationReportsSpeakerAssignmentSubmissionsRoute,
  getEducationReportsSpeakerAssignmentSubmissionsSpeakerAssignmentSubmissionIdRoute,
  patchEducationReportsReadingAssignmentSubmissionsReadingAssignmentSubmissionIdRoute,
  patchEducationReportsReadingCoachPassagesReadingCoachPassageIdRoute,
  patchEducationReportsReflectCheckInResponsesReflectCheckInResponseIdRoute,
  patchEducationReportsRoute,
  patchEducationReportsSpeakerAssignmentSubmissionsSpeakerAssignmentSubmissionIdRoute,
  postEducationReportsReadingAssignmentSubmissionsRoute,
  postEducationReportsReadingCoachPassagesRoute,
  postEducationReportsReflectCheckInResponsesRoute,
  postEducationReportsSpeakerAssignmentSubmissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const educationReportsRootHandler = app
  .openapi(getEducationReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEducationReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEducationReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationReportsReadingAssignmentSubmissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEducationReportsReadingAssignmentSubmissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getEducationReportsReadingAssignmentSubmissionsReadingAssignmentSubmissionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchEducationReportsReadingAssignmentSubmissionsReadingAssignmentSubmissionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteEducationReportsReadingAssignmentSubmissionsReadingAssignmentSubmissionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getEducationReportsReadingAssignmentSubmissionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationReportsReadingCoachPassagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEducationReportsReadingCoachPassagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationReportsReadingCoachPassagesReadingCoachPassageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEducationReportsReadingCoachPassagesReadingCoachPassageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEducationReportsReadingCoachPassagesReadingCoachPassageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationReportsReadingCoachPassagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationReportsReflectCheckInResponsesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEducationReportsReflectCheckInResponsesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationReportsReflectCheckInResponsesReflectCheckInResponseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEducationReportsReflectCheckInResponsesReflectCheckInResponseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEducationReportsReflectCheckInResponsesReflectCheckInResponseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationReportsReflectCheckInResponsesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEducationReportsSpeakerAssignmentSubmissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEducationReportsSpeakerAssignmentSubmissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getEducationReportsSpeakerAssignmentSubmissionsSpeakerAssignmentSubmissionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchEducationReportsSpeakerAssignmentSubmissionsSpeakerAssignmentSubmissionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteEducationReportsSpeakerAssignmentSubmissionsSpeakerAssignmentSubmissionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getEducationReportsSpeakerAssignmentSubmissionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
