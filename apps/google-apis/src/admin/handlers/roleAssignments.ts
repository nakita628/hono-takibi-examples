import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminDirectoryV1CustomerCustomerRoleassignmentsRoleAssignmentIdRoute,
  getAdminDirectoryV1CustomerCustomerRoleassignmentsRoleAssignmentIdRoute,
  getAdminDirectoryV1CustomerCustomerRoleassignmentsRoute,
  postAdminDirectoryV1CustomerCustomerRoleassignmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const roleAssignmentsHandler = app
  .openapi(getAdminDirectoryV1CustomerCustomerRoleassignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1CustomerCustomerRoleassignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminDirectoryV1CustomerCustomerRoleassignmentsRoleAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1CustomerCustomerRoleassignmentsRoleAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
