import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAssignmentsAssignmentIdAcceptedAssignmentsRoute,
  getAssignmentsAssignmentIdGradesRoute,
  getAssignmentsAssignmentIdRoute,
  getClassroomsClassroomIdAssignmentsRoute,
  getClassroomsClassroomIdRoute,
  getClassroomsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const classroomHandler = app
  .openapi(getAssignmentsAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssignmentsAssignmentIdAcceptedAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssignmentsAssignmentIdGradesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClassroomsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClassroomsClassroomIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClassroomsClassroomIdAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
