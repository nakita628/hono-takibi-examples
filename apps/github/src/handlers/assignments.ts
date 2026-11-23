import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAssignmentsAssignmentIdAcceptedAssignmentsRoute,
  getAssignmentsAssignmentIdGradesRoute,
  getAssignmentsAssignmentIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const assignmentsHandler = app
  .openapi(getAssignmentsAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssignmentsAssignmentIdAcceptedAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssignmentsAssignmentIdGradesRoute, (c) => {
    throw new Error('Not implemented')
  })
