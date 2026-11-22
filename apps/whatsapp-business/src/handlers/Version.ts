import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVersionGroupIdInviteLinkRoute,
  deleteVersionGroupIdJoinRequestsRoute,
  deleteVersionGroupIdParticipantsRoute,
  deleteVersionGroupIdRoute,
  getVersionGroupIdJoinRequestsRoute,
  getVersionGroupIdRoute,
  getVersionPhoneNumberIDGroupsRoute,
  postVersionGroupIdInviteLinkRoute,
  postVersionGroupIdJoinRequestsRoute,
  postVersionGroupIdParticipantsRoute,
  postVersionGroupIdRoute,
  postVersionPhoneNumberIDGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const VersionHandler = app
  .openapi(postVersionPhoneNumberIDGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionPhoneNumberIDGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionGroupIdInviteLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVersionGroupIdInviteLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionGroupIdJoinRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionGroupIdJoinRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVersionGroupIdJoinRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionGroupIdParticipantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVersionGroupIdParticipantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVersionGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
