import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1GroupsAddMemberRoute,
  postV1GroupsCreateRoute,
  postV1GroupsDeleteRoute,
  postV1GroupsGetRoute,
  postV1GroupsListMembersRoute,
  postV1GroupsListRoute,
  postV1GroupsRemoveMemberRoute,
  postV1GroupsUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupHandler = app
  .openapi(postV1GroupsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GroupsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GroupsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GroupsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GroupsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GroupsListMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GroupsAddMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GroupsRemoveMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
