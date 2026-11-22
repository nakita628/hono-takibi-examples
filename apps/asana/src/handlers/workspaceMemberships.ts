import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUsersUserGidWorkspaceMembershipsRoute,
  getWorkspaceMembershipsWorkspaceMembershipGidRoute,
  getWorkspacesWorkspaceGidWorkspaceMembershipsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workspaceMembershipsHandler = app
  .openapi(getWorkspaceMembershipsWorkspaceMembershipGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserGidWorkspaceMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceGidWorkspaceMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
