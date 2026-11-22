import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeAppRoleAssignmentsAppRoleAssignmentIdRoute,
  getMeAppRoleAssignmentsAppRoleAssignmentIdRoute,
  getMeAppRoleAssignmentsCountRoute,
  getMeAppRoleAssignmentsRoute,
  patchMeAppRoleAssignmentsAppRoleAssignmentIdRoute,
  postMeAppRoleAssignmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meAppRoleAssignmentHandler = app
  .openapi(getMeAppRoleAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeAppRoleAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAppRoleAssignmentsAppRoleAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeAppRoleAssignmentsAppRoleAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeAppRoleAssignmentsAppRoleAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAppRoleAssignmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
