import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdminInviteRequestsListRoute,
  postAdminInviteRequestsApproveRoute,
  postAdminInviteRequestsDenyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adminInviteRequestsHandler = app
  .openapi(postAdminInviteRequestsApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminInviteRequestsDenyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminInviteRequestsListRoute, (c) => {
    throw new Error('Not implemented')
  })
