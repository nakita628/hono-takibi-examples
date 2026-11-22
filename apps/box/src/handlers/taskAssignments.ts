import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTaskAssignmentsTaskAssignmentIdRoute,
  getTaskAssignmentsTaskAssignmentIdRoute,
  getTasksTaskIdAssignmentsRoute,
  postTaskAssignmentsRoute,
  putTaskAssignmentsTaskAssignmentIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const taskAssignmentsHandler = app
  .openapi(getTasksTaskIdAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTaskAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTaskAssignmentsTaskAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTaskAssignmentsTaskAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTaskAssignmentsTaskAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
