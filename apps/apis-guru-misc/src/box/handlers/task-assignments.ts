import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTaskAssignmentsTaskAssignmentIdRoute,
  getTaskAssignmentsTaskAssignmentIdRoute,
  postTaskAssignmentsRoute,
  putTaskAssignmentsTaskAssignmentIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const taskAssignmentsHandler = app
  .openapi(postTaskAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTaskAssignmentsTaskAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTaskAssignmentsTaskAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTaskAssignmentsTaskAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
