import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiInvitationsKeyRoute,
  getApiInvitationsKeyRoute,
  getApiInvitationsRoute,
  postApiInvitationsKeyAcceptRoute,
  postApiInvitationsKeyDeclineRoute,
  postApiInvitationsKeyResendRoute,
  postApiInvitationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const invitationsHandler = app
  .openapi(getApiInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiInvitationsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiInvitationsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiInvitationsKeyAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiInvitationsKeyDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiInvitationsKeyResendRoute, (c) => {
    throw new Error('Not implemented')
  })
