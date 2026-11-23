import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRoleAssignmentsAssignmentIdRoute,
  getRoleAssignmentsAssignmentIdRoute,
  getRoleAssignmentsRoute,
  postRoleAssignmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const roleAssignmentsHandler = app
  .openapi(getRoleAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoleAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRoleAssignmentsAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoleAssignmentsAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
