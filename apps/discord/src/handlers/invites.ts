import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteInvitesCodeRoute,
  deleteInvitesCodeTargetUsersUserIdRoute,
  getInvitesCodeRoute,
  getInvitesCodeTargetUsersJobStatusRoute,
  getInvitesCodeTargetUsersRoute,
  postInvitesCodeTargetUsersBulkAddRoute,
  postInvitesCodeTargetUsersBulkDeleteRoute,
  putInvitesCodeTargetUsersRoute,
  putInvitesCodeTargetUsersUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const invitesHandler = app
  .openapi(getInvitesCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteInvitesCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInvitesCodeTargetUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInvitesCodeTargetUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvitesCodeTargetUsersBulkAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvitesCodeTargetUsersBulkDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInvitesCodeTargetUsersJobStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInvitesCodeTargetUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteInvitesCodeTargetUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
