import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGroupsGroupIdMembersMemberIdRoute,
  deleteGroupsGroupIdRoute,
  deleteGroupsGroupIdSettingsVirtualBackgroundsRoute,
  getGroupsGroupIdLockSettingsRoute,
  getGroupsGroupIdMembersRoute,
  getGroupsGroupIdRoute,
  getGroupsGroupIdSettingsRoute,
  getGroupsRoute,
  patchGroupsGroupIdLockSettingsRoute,
  patchGroupsGroupIdMembersMemberIdRoute,
  patchGroupsGroupIdRoute,
  patchGroupsGroupIdSettingsRoute,
  postGroupsGroupIdMembersRoute,
  postGroupsGroupIdSettingsVirtualBackgroundsRoute,
  postGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsHandler = app
  .openapi(getGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdLockSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdLockSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdMembersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdMembersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdSettingsVirtualBackgroundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdSettingsVirtualBackgroundsRoute, (c) => {
    throw new Error('Not implemented')
  })
