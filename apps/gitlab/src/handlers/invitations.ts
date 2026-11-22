import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4GroupsIdInvitationsEmailRoute,
  deleteApiV4ProjectsIdInvitationsEmailRoute,
  getApiV4GroupsIdInvitationsRoute,
  getApiV4ProjectsIdInvitationsRoute,
  postApiV4GroupsIdInvitationsRoute,
  postApiV4ProjectsIdInvitationsRoute,
  putApiV4GroupsIdInvitationsEmailRoute,
  putApiV4ProjectsIdInvitationsEmailRoute,
} from '../routes'

const app = new OpenAPIHono()

export const invitationsHandler = app
  .openapi(postApiV4GroupsIdInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdInvitationsEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GroupsIdInvitationsEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdInvitationsEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdInvitationsEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
