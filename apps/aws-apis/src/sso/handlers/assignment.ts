import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAssignmentAccountsXAmzSsoBearerTokenRoute,
  getAssignmentRolesXAmzSsoBearerTokenAccountIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const assignmentHandler = app
  .openapi(getAssignmentRolesXAmzSsoBearerTokenAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssignmentAccountsXAmzSsoBearerTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
