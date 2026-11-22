import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGroupsGroupIdAdminsRoute,
  deleteGroupsGroupIdIconRoute,
  deleteGroupsGroupIdInviteRoute,
  deleteGroupsGroupIdParticipantsRoute,
  getGroupsGroupIdIconRoute,
  getGroupsGroupIdInviteRoute,
  getGroupsGroupIdRoute,
  getGroupsRoute,
  patchGroupsGroupIdAdminsRoute,
  postGroupsGroupIdIconRoute,
  postGroupsGroupIdLeaveRoute,
  postGroupsRoute,
  putGroupsGroupIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsHandler = app
  .openapi(getGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdAdminsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdAdminsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdIconRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdIconRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdIconRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdLeaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdParticipantsRoute, (c) => {
    throw new Error('Not implemented')
  })
