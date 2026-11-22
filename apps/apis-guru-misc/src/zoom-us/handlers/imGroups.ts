import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteImGroupsGroupIdMembersMemberIdRoute,
  deleteImGroupsGroupIdRoute,
  getImGroupsGroupIdMembersRoute,
  getImGroupsGroupIdRoute,
  getImGroupsRoute,
  patchImGroupsGroupIdRoute,
  postImGroupsGroupIdMembersRoute,
  postImGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const imGroupsHandler = app
  .openapi(getImGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postImGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteImGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchImGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImGroupsGroupIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postImGroupsGroupIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteImGroupsGroupIdMembersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
