import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiSpacesSpaceInvitationsInvitationRoute,
  deleteApiSpacesSpaceMembersMemberRoute,
  deleteApiSpacesSpaceRoute,
  getApiSpacesRoute,
  getApiSpacesSpaceInvitationsInvitationRoute,
  getApiSpacesSpaceInvitationsRoute,
  getApiSpacesSpaceMembersMemberRoute,
  getApiSpacesSpaceMembersRoute,
  getApiSpacesSpaceRoute,
  getApiUsersUserSpaceInvitationsRoute,
  patchApiSpacesSpaceMembersMemberRoute,
  patchApiSpacesSpaceRoute,
  postApiSpacesRoute,
  postApiSpacesSpaceInvitationsInvitationAcceptRoute,
  postApiSpacesSpaceInvitationsInvitationDeclineRoute,
  postApiSpacesSpaceInvitationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const spaceServiceHandler = app
  .openapi(getApiSpacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSpacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSpacesSpaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiSpacesSpaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiSpacesSpaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSpacesSpaceInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSpacesSpaceInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSpacesSpaceInvitationsInvitationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiSpacesSpaceInvitationsInvitationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSpacesSpaceInvitationsInvitationAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSpacesSpaceInvitationsInvitationDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSpacesSpaceMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSpacesSpaceMembersMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiSpacesSpaceMembersMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiSpacesSpaceMembersMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersUserSpaceInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
