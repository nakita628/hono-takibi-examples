import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminDirectoryV1GroupsGroupKeyMembersMemberKeyRoute,
  getAdminDirectoryV1GroupsGroupKeyHasMemberMemberKeyRoute,
  getAdminDirectoryV1GroupsGroupKeyMembersMemberKeyRoute,
  getAdminDirectoryV1GroupsGroupKeyMembersRoute,
  patchAdminDirectoryV1GroupsGroupKeyMembersMemberKeyRoute,
  postAdminDirectoryV1GroupsGroupKeyMembersRoute,
  putAdminDirectoryV1GroupsGroupKeyMembersMemberKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const membersHandler = app
  .openapi(getAdminDirectoryV1GroupsGroupKeyHasMemberMemberKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1GroupsGroupKeyMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1GroupsGroupKeyMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminDirectoryV1GroupsGroupKeyMembersMemberKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1GroupsGroupKeyMembersMemberKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminDirectoryV1GroupsGroupKeyMembersMemberKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminDirectoryV1GroupsGroupKeyMembersMemberKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
